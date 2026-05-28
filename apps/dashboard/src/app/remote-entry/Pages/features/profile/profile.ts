import { Component, inject, Input, signal } from '@angular/core';
import {SharedInp , SharedPhoneInp} from '@my-org/sharedInp' ;
import { CustomButton } from '@Ui-components';
import { FileUploadModule } from 'primeng/fileupload';
import { ProfileServ } from './services/profileServ/profile-serv';
import { User } from './Interfaces/profileInter/profile-inter';
import { NgClass } from "../../../../../../../../node_modules/@angular/common/types/_common_module-chunk";
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  imports: [SharedInp, SharedPhoneInp, CustomButton, FileUploadModule, FormsModule, ButtonModule, ConfirmDialogModule, ToastModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  providers: [ConfirmationService, MessageService]
})
export class Profile {
  @Input() isDashboard: boolean = true;
  previewImage: string | null = null;
  userData = signal({} as User);
  profileServise = inject(ProfileServ);
  tempUser: User = {} as User;
  subscription!: Subscription;
  router = inject(Router);


  getUserData(){
    this.profileServise.getProfile().subscribe({
      next : (res) => {
        this.userData.set(res.user as User);
       // console.log(this.userData());

      },
      error : (err) => {
        console.log(err);
      }
    })
  }

   updateProfile() {
    const payload = {
      firstName: this.tempUser.firstName,
      lastName: this.tempUser.lastName,
      email: this.tempUser.email,
      phone: this.tempUser.phone,
      photo: this.tempUser.photo,
    };

    this.profileServise.getProfile(payload).subscribe({
      next: (res) => {
        this.userData.set(res.user as User);
        this.tempUser = { ...res.user };
        if (this.selectedFile) {
        this.uploadPhoto();
      }
      },
      error: (err) => console.log(err),
    });
  }
private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  confirm2(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,

      message: 'Are you sure you want to delete your account?',
      header: 'Delete Account',
      icon: 'pi pi-info-circle',

      rejectLabel: 'Cancel',

      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },

      acceptButtonProps: {
        label: 'Delete',
        severity: 'danger',
      },

      accept: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Deleted',
          detail: 'Account deleted successfully',
        });

        console.log('delete account');
        // API delete account
        this.profileServise.deleteAccount().subscribe({
          next: (res) => {
            console.log(res);
            localStorage.removeItem('token');
            this.router.navigateByUrl('/login');
          },
          error: (err) => {
            console.log(err);
          },
        });
      },

      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Cancelled',
          detail: 'Delete cancelled',
        });
      },
    });
  }

 selectedFile!: File;

onFileSelected(event: any) {
  const file = event.files[0];

  this.selectedFile = file;

  const reader = new FileReader();
  reader.onload = () => {
    this.previewImage = reader.result as string;
  };

  reader.readAsDataURL(file);
}

uploadPhoto() {
  if (!this.selectedFile) return;

  const formData = new FormData();

  formData.append('photo', this.selectedFile);

  this.profileServise.updateProfilePhoto(formData).subscribe({
    next: (res: any) => {
      this.userData.update((u) => ({
        ...u,
        photo: res.user.photo,
      }));

      console.log('photo uploaded');
    },
    error: (err) => console.log(err),
  });
}


ngOnInit(): void {
  this.getUserData();
}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
