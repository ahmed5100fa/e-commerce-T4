import { Component, inject, Input, signal } from '@angular/core';
import {SharedInp , SharedPhoneInp} from '@my-org/sharedInp' ;
import { CustomButton } from '@Ui-components';
import { FileUploadModule } from 'primeng/fileupload';
import { ProfileServ } from './services/profileServ/profile-serv';
import { User } from './Interfaces/profileInter/profile-inter';
import { NgClass } from "../../../../../../../../node_modules/@angular/common/types/_common_module-chunk";
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-profile',
  imports: [SharedInp, SharedPhoneInp, CustomButton, FileUploadModule, FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  @Input() isDashboard: boolean = true;
  previewImage: string | null = null;
  userData = signal({} as User);
  profileServise = inject(ProfileServ);
  tempUser: User = {} as User;
  subscription!: Subscription;

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
