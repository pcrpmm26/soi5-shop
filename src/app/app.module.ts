import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { ProductComponent } from './components/pages/product/product.component';
import { MainComponent } from './components/pages/main/main.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoginComponent } from './components/pages/login/login.component';
import { AuthInterceptor } from './helper/auth.interceptor';
import { BookComponent } from './components/pages/book/book.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { BorrowComponent } from './components/pages/borrow/borrow.component';
import { ReturnComponent } from './components/pages/return/return.component';
import { SearchComponent } from './components/pages/search/search.component';
import { EditBookComponent } from './components/pages/edit-book/edit-book.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductComponent,
    MainComponent,
    LoginComponent,
    BookComponent,
    StaffComponent,
    BorrowComponent,
    ReturnComponent,
    SearchComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
