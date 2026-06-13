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
  Product,
} from '../../interfaces/prointer';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CircleX, Heart, Image, Images, LucideAngularModule, MoveLeft, MoveRight } from 'lucide-angular';

@Component({
  selector: 'app-pro-form',
  imports: [
    ReactiveFormsModule,
    SharedInp,
    CustomButton,
    LucideAngularModule
],
  templateUrl: './proForm.html',
  styleUrl: './proForm.css',
})
export class ProForm implements OnChanges {
  productForm!: FormGroup;
  readonly icons = [Image , Images , CircleX , MoveRight , MoveLeft];
  @Input() mode: 'create' | 'edit' = 'create';
  productData = signal<Product | null>(null);

  showViewer = false;
  viewerImages: string[] = [];
  currentImageIndex = 0;

  id : string  = "";
  occasions = signal<Occasion[]>([]);
  categories = signal<Category[]>([]);

  productService = inject(ProServ);

  priceAfterDiscount = 0;

  coverFileName = '';
  galleryFileText = '';

  subscription!: Subscription;

  route = inject(ActivatedRoute);

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
    this.id = this.route.snapshot.paramMap.get('id') || "";
    this.getSpesificProduct(this.id);
    this.initForm();
    this.getAllOccasions();
    this.getAllCategories();
    this.listenPriceChanges();
  }

ngOnChanges(): void {
  if (this.mode === 'edit' && this.productData()?.title) {
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
        this.productData()?.title,
      description:
        this.productData()?.description,
      price:
        this.productData()?.price,
      discount:
        this.productData()?.discount,
      quantity:
        this.productData()?.quantity,
      category:
        this.productData()?.category,
      occasion:
        this.productData()?.occasion,
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
  this.productForm.markAllAsTouched();

  if (this.productForm.invalid) return;

  if (this.mode === 'create') {
    const formData = this.buildFormData();
    this.createProduct(formData);

  } else {
    const formData =
      this.buildUpdateFormData();

    this.updateProduct(
      formData,
      this.id
    );
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

updateProduct(formData: FormData , id: string) {
  this.productService
    .updateProduct(
      id,
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

getSpesificProduct(id: string) {
  this.subscription = this.productService
    .getProductById(id)
    .subscribe({
      next: (res) => {
        console.log('Product Data:', res);
        this.productData.set(res.product);
        this.fillForm();
      },

      error: (err) => {
        console.log('ERROR fetching product', err);
      },
    });
}

buildUpdateFormData(): FormData {
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
    'price',
    String(this.productForm.value.price)
  );

  formData.append(
    'quantity',
    String(this.productForm.value.quantity)
  );

  return formData;
}

openCover() {
  const cover = this.productData()?.imgCover;

  if (!cover) return;
  this.viewerImages = [cover];
  this.currentImageIndex = 0;
  this.showViewer = true;
}

openGallery() {
  const images = this.productData()?.images;
  if (!images?.length) return;

  this.viewerImages = images;
  this.currentImageIndex = 0;
  this.showViewer = true;
}

closeViewer() {
  this.showViewer = false;
  this.viewerImages = [];
  this.currentImageIndex = 0;
}

nextImage() {
  if (this.currentImageIndex < this.viewerImages.length - 1) {
    this.currentImageIndex++;
  }
}

prevImage() {
  if (this.currentImageIndex > 0) {
    this.currentImageIndex--;
  }
}

goToImage(index: number) {
  this.currentImageIndex = index;
}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
