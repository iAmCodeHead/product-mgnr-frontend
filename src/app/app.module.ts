import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './admin/login/login.component';
import { AllReviewsComponent } from './admin/all-reviews/all-reviews.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { SharedModule } from './modules/shared/shared.module';
import { AlertComponent } from './modules/shared/alert/alert.component';
import { FormsModule } from '@angular/forms';
import { NewProductComponent } from './admin/new-product/new-product.component';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';

export function tokenGetter(): string {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NewProductComponent,
    AllReviewsComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: [`${environment.baseUrl}`]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
