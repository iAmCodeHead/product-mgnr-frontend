import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/core/services/auth-service/auth.service';
import { OrganizationsService } from 'src/app/modules/core/services/organizations-service/organizations.service';
import { ReviewModel } from '../../models/review.model';
import { ReviewsService } from '../../modules/core/services/reviews-service/reviews.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};
  allProducts;
  message: string;
  success: boolean;
  failed: boolean;
  pending: boolean;
  loading: boolean;
  newReview = new ReviewModel();

  constructor(
    private authService: AuthService,
    private reviewService: ReviewsService,
    private productService: OrganizationsService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(this.authService.user);
    this.getAllProducts();  
  }

  getAllProducts(): void {
    this.productService.getProducts().subscribe((res: any) => {
      this.allProducts = res.data;
      
      this.allProducts.map((e) => {
        e.showReviews = false;
        e.showAddReview = false;
      });
    });
  }

  sendReview(index: number): void {
    this.pending = true;
    this.message = 'Please wait';
    const data = {
      productId: this.allProducts[index]._id,
      comment: this.newReview.review
    };    
    this.reviewService.addNewReview(data).subscribe((res: any) => {
      this.pending = false;
      this.success = true;
      this.message = res.message;
      this.hideAddReviewField(index);
      this.getAllProducts();
    }, (err) => {
      this.failed = true;
      this.message = 'We had trouble posting your coment. Please try again';
    });
  }

  showAddReviewField(index: number): void {
    this.allProducts[index].showAddReview = true;
  }

  hideAddReviewField(index: number): void {
    this.allProducts[index].showAddReview = false;
  }

  showReviews(index: number): void {
    this.allProducts[index].showReviews = !this.allProducts[index].showReviews;
  }

}
