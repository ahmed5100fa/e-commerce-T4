// import {
//   ChangeDetectorRef,
//   Component,
//   inject,
//   Input,
//   signal,
// } from '@angular/core';

// import {
//   FormBuilder,
//   FormGroup,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';

// import imageCompression from 'browser-image-compression';

// import { SharedInp } from '@my-org/sharedInp';
// import { CustomButton } from '@Ui-components';
// import { ProServ } from '../../services/proServ/pro-serv';
// import { Category, Occasion } from '../../interfaces/prointer';

// @Component({
//   selector: 'app-pro-form',
//   imports: [
//     ReactiveFormsModule,
//     SharedInp,
//     CustomButton,
//   ],
//   templateUrl: './proForm.html',
//   styleUrl: './proForm.css',
// })
// export class ProForm {
//   productForm!: FormGroup;
//   @Input() mode : 'create' | 'edit' = 'create';
//   @Input() productData: any = null;
//   occasions = signal<Occasion[]>([]);
//   categories = signal<Category[]>([]);
//   productService = inject(ProServ);

//   priceAfterDiscount = 0;

//   coverFileName = '';
//   galleryFileText = '';

//   constructor(
//     private fb: FormBuilder,
//     private cdr: ChangeDetectorRef
//   ) {}

//   ngOnInit(): void {
//     this.getAllOccasions();
//     this.getAllCategories();
//     this.productForm = this.fb.group({
//       title: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(3),
//         ],
//       ],

//       description: [
//         '',
//         [
//           Validators.required,
//           Validators.minLength(10),
//         ],
//       ],

//       price: [
//         null,
//         [
//           Validators.required,
//           Validators.min(1),
//         ],
//       ],

//       discount: [0],

//       quantity: [
//         null,
//         [
//           Validators.required,
//           Validators.min(1),
//         ],
//       ],

//       cover: [
//         null,
//         Validators.required,
//       ],

//       gallery: [
//         [],
//         Validators.required,
//       ],

//       category: [
//         '',
//         Validators.required,
//       ],

//       occasion: [
//         '',
//         Validators.required,
//       ],
//     });

//     this.productForm
//       .get('price')
//       ?.valueChanges.subscribe(() =>
//         this.calculatePrice()
//       );

//     this.productForm
//       .get('discount')
//       ?.valueChanges.subscribe(() =>
//         this.calculatePrice()
//       );
//   }

//   calculatePrice() {
//     const price =
//       Number(
//         this.productForm.get('price')
//           ?.value
//       ) || 0;

//     const discount =
//       Number(
//         this.productForm.get(
//           'discount'
//         )?.value
//       ) || 0;

//     this.priceAfterDiscount =
//       price -
//       (price * discount) / 100;
//   }

//   async compressImage(
//     file: File
//   ): Promise<File> {
//     const options = {
//       maxSizeMB: 1,
//       maxWidthOrHeight: 1024,
//       useWebWorker: true,
//     };

//     const compressedFile =
//       await imageCompression(
//         file,
//         options
//       );

//     console.log(
//       'Old Size:',
//       file.size / 1024 / 1024,
//       'MB'
//     );

//     console.log(
//       'New Size:',
//       compressedFile.size /
//         1024 /
//         1024,
//       'MB'
//     );

//     return compressedFile;
//   }

//   async onCoverChange(
//     event: Event
//   ) {
//     const input =
//       event.target as HTMLInputElement;

//     if (!input.files?.length)
//       return;

//     const file = input.files[0];

//     if (
//       !file.type.startsWith(
//         'image/'
//       )
//     ) {
//       this.productForm
//         .get('cover')
//         ?.setErrors({
//           invalidType: true,
//         });

//       this.coverFileName = '';
//       return;
//     }

//     const compressedFile =
//       await this.compressImage(
//         file
//       );

//     this.coverFileName =
//       compressedFile.name;

//     this.productForm.patchValue({
//       cover: compressedFile,
//     });

//     this.productForm
//       .get('cover')
//       ?.markAsTouched();

//     this.cdr.detectChanges();
//   }

//   async onGalleryChange(
//     event: Event
//   ) {
//     const input =
//       event.target as HTMLInputElement;

//     if (!input.files?.length)
//       return;

//     const files = Array.from(
//       input.files
//     );

//     const onlyImages =
//       files.every((file) =>
//         file.type.startsWith(
//           'image/'
//         )
//       );

//     if (!onlyImages) {
//       this.productForm
//         .get('gallery')
//         ?.setErrors({
//           invalidType: true,
//         });

//       this.galleryFileText =
//         '';

//       return;
//     }

//     const compressedFiles =
//       await Promise.all(
//         files.map((file) =>
//           this.compressImage(
//             file
//           )
//         )
//       );

//     this.galleryFileText =
//       `${compressedFiles.length} file(s) selected`;

//     this.productForm.patchValue({
//       gallery:
//         compressedFiles,
//     });

//     this.productForm
//       .get('gallery')
//       ?.markAsTouched();

//     this.cdr.detectChanges();
//   }

//   getAllOccasions() {
//     this.productService
//       .getOccasions()
//       .subscribe({
//         next: (res) => {
//           this.occasions.set(
//             res.occasions
//           );
//         },

//         error: (err) => {
//           console.log(
//             'ERROR fetching occasions'
//           );

//           console.log(
//             err
//           );
//         },});
//       }

//   getAllCategories (){
//     this.productService.getCategories()
//       .subscribe({
//         next: (res) => {
//           this.categories.set(
//             res.categories
//           );
//         },

//         error: (err) => {
//           console.log(
//             'ERROR fetching categories'
//           );

//           console.log(
//             err
//           );
//         },
//        });
//   }



//   submit() {
//     console.log(
//       'Submit Clicked'
//     );

//     this.productForm.markAllAsTouched();

//     if (
//       this.productForm.invalid
//     ) {
//       console.log(
//         'Form Invalid'
//       );
//       return;
//     }

//     const formData =
//       new FormData();

//     formData.append(
//       'title',
//       this.productForm.value
//         .title
//     );

//     formData.append(
//       'description',
//       this.productForm.value
//         .description
//     );

//     formData.append(
//       'quantity',
//       String(
//         this.productForm.value
//           .quantity
//       )
//     );

//     formData.append(
//       'price',
//       String(
//         this.productForm.value
//           .price
//       )
//     );

//     formData.append(
//       'discount',
//       String(
//         this.productForm.value
//           .discount
//       )
//     );

//     formData.append(
//       'priceAfterDiscount',
//       String(
//         this
//           .priceAfterDiscount
//       )
//     );

//     formData.append(
//       'category',
//       this.productForm.value
//         .category
//     );

//     formData.append(
//       'occasion',
//       this.productForm.value
//         .occasion
//     );

//     const cover =
//       this.productForm.value
//         .cover;

//     if (cover) {
//       formData.append(
//         'imgCover',
//         cover,
//         cover.name
//       );
//     }

//     const gallery =
//       this.productForm.value
//         .gallery || [];

//     gallery.forEach(
//       (file: File) => {
//         formData.append(
//           'images',
//           file,
//           file.name
//         );
//       }
//     );

//     this.productService
//       .createProduct(
//         formData
//       )
//       .subscribe({
//         next: (res) => {
//           console.log(
//             'SUCCESS'
//           );

//           console.log(
//             res
//           );

//           this.productForm.reset();

//           this.coverFileName =
//             '';

//           this.galleryFileText =
//             '';

//           this.priceAfterDiscount = 0;
//         },

//         error: (err) => {
//           console.log(
//             'ERROR'
//           );

//           console.log(
//             err
//           );

//           console.log(
//             err.error
//           );
//         },
//       });
//   }
// }

import {
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  OnChanges,
  signal,
  SimpleChanges,
} from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import imageCompression from 'browser-image-compression';

import { SharedInp } from '@my-org/sharedInp';
import { CustomButton } from '@Ui-components';
import { ProServ } from '../../services/proServ/pro-serv';
import {
  Category,
  Occasion,
} from '../../interfaces/prointer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pro-form',
  imports: [
    ReactiveFormsModule,
    SharedInp,
    CustomButton,
  ],
  templateUrl: './proForm.html',
  styleUrl: './proForm.css',
})
export class ProForm implements OnChanges {
  productForm!: FormGroup;

  @Input() mode: 'create' | 'edit' = 'create';
  @Input() productData: any = null;

  occasions = signal<Occasion[]>([]);
  categories = signal<Category[]>([]);

  productService = inject(ProServ);

  priceAfterDiscount = 0;

  coverFileName = '';
  galleryFileText = '';

  subscription!: Subscription;

  getAllOccasions() {
    this.productService
      .getOccasions()
      .subscribe({
        next: (res) => {
          this.occasions.set(
            res.occasions
          );
        },

        error: (err) => {
          console.log(
            'ERROR fetching occasions'
          );

          console.log(
            err
          );
        },});
      }

  getAllCategories (){
    this.productService.getCategories()
      .subscribe({
        next: (res) => {
          this.categories.set(
            res.categories
          );
        },

        error: (err) => {
          console.log(
            'ERROR fetching categories'
          );

          console.log(
            err
          );
        },
       });
  }

  constructor(
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  // ================= INIT =================
  ngOnInit(): void {
    this.initForm();
    this.getAllOccasions();
    this.getAllCategories();
    this.listenPriceChanges();
  }

ngOnChanges(): void {
  if (this.mode === 'edit' && this.productData?.title) {
    this.fillForm();
  }
}

  // ================= FORM =================
  initForm() {
    this.productForm = this.fb.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
        ],
      ],

      description: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
        ],
      ],

      price: [
        null,
        [
          Validators.required,
          Validators.min(1),
        ],
      ],

      discount: [0],

      quantity: [
        null,
        [
          Validators.required,
          Validators.min(1),
        ],
      ],

      cover: [null],

      gallery: [[]],

      category: [
        '',
        Validators.required,
      ],

      occasion: [
        '',
        Validators.required,
      ],
    });
  }

  fillForm() {
    this.productForm.patchValue({
      title:
        this.productData.title,
      description:
        this.productData.description,
      price:
        this.productData.price,
      discount:
        this.productData.discount,
      quantity:
        this.productData.quantity,
      category:
        this.productData.category,
      occasion:
        this.productData.occasion,
    });

    this.calculatePrice();
  }

  listenPriceChanges() {
    this.productForm
      .get('price')
      ?.valueChanges.subscribe(
        () => this.calculatePrice()
      );

    this.productForm
      .get('discount')
      ?.valueChanges.subscribe(
        () => this.calculatePrice()
      );
  }

  calculatePrice() {
    const price =
      Number(
        this.productForm.get(
          'price'
        )?.value
      ) || 0;

    const discount =
      Number(
        this.productForm.get(
          'discount'
        )?.value
      ) || 0;

    this.priceAfterDiscount =
      price -
      (price * discount) / 100;
  }

  // ================= IMAGE COMPRESSION =================
  async compressImage(
    file: File
  ): Promise<File> {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };

    return await imageCompression(
      file,
      options
    );
  }

  // ================= COVER =================
  async onCoverChange(
    event: Event
  ) {
    const input =
      event.target as HTMLInputElement;

    if (!input.files?.length)
      return;

    const file = input.files[0];

    if (
      !file.type.startsWith(
        'image/'
      )
    )
      return;

    const compressed =
      await this.compressImage(
        file
      );

    this.coverFileName =
      compressed.name;

    this.productForm.patchValue({
      cover: compressed,
    });

    this.cdr.detectChanges();
  }

  // ================= GALLERY =================
  async onGalleryChange(
    event: Event
  ) {
    const input =
      event.target as HTMLInputElement;

    if (!input.files?.length)
      return;

    const files = Array.from(
      input.files
    );

    const compressedFiles =
      await Promise.all(
        files.map((f) =>
          this.compressImage(f)
        )
      );

    this.galleryFileText =
      `${compressedFiles.length} file(s) selected`;

    this.productForm.patchValue({
      gallery: compressedFiles,
    });

    this.cdr.detectChanges();
  }

  // =================
  buildFormData(): FormData {
  const formData = new FormData();

  formData.append(
    'title',
    this.productForm.value.title
  );

  formData.append(
    'description',
    this.productForm.value.description
  );

  formData.append(
    'quantity',
    String(
      this.productForm.value.quantity
    )
  );

  formData.append(
    'price',
    String(
      this.productForm.value.price
    )
  );

  formData.append(
    'discount',
    String(
      this.productForm.value.discount
    )
  );

  formData.append(
    'priceAfterDiscount',
    String(
      this.priceAfterDiscount
    )
  );

  formData.append(
    'category',
    this.productForm.value.category
  );

  formData.append(
    'occasion',
    this.productForm.value.occasion
  );

  const cover =
    this.productForm.value.cover;

  if (cover) {
    formData.append(
      'imgCover',
      cover,
      cover.name
    );
  }

  const gallery =
    this.productForm.value.gallery || [];

  gallery.forEach((file: File) => {
    formData.append(
      'images',
      file,
      file.name
    );
  });

  return formData;
}

submit() {
  console.log('Submit Clicked');

  this.productForm.markAllAsTouched();

  if (this.productForm.invalid) {
    console.log('Form Invalid');
    return;
  }

  const formData = this.buildFormData();

  if (this.mode === 'create') {
    this.createProduct(formData);
  } else {
    this.updateProduct(formData);
  }
}

createProduct(formData: FormData) {
  this.productService
    .createProduct(formData)
    .subscribe({
      next: (res) => {
        console.log('CREATED', res);

        this.productForm.reset();
        this.coverFileName = '';
        this.galleryFileText = '';
        this.priceAfterDiscount = 0;
      },

      error: (err) => {
        console.log('ERROR', err);
      },
    });
}

updateProduct(formData: FormData) {
  this.productService
    .updateProduct(
      this.productData._id,
      formData
    )
    .subscribe({
      next: (res) => {
        console.log('UPDATED', res);
      },

      error: (err) => {
        console.log('ERROR', err);
      },
    });
}


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
