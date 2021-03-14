import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { FormGroup, NgForm } from '@angular/forms';
import { OrganizationsService } from 'src/app/modules/core/services/organizations-service/organizations.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  product = new ProductModel();
  reviewFormGroup: FormGroup;
  loading: Boolean;
  message: string;


  constructor(
    private productService: OrganizationsService
  ) { }

  ngOnInit(): void {
  }

  newProduct(): void {
    this.productService.addProduct(this.product).subscribe((res: any) => {
      this.message = res.message;
    }, (err) => {
      this.message = 'We had trouble uploading your product. Please try again';      
    });
  }

}
