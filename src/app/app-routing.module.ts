import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './components/pages/book/book.component';
import { BorrowComponent } from './components/pages/borrow/borrow.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { MemberComponent } from './components/pages/member/member.component';
import { ReturnComponent } from './components/pages/return/return.component';
import { SearchComponent } from './components/pages/search/search.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
    { path: "", component: MainComponent },
    // { path: "product", component: ProductComponent, canActivate: [ AuthGuard ] },
    // { path: "product/detail/:id", component: ProductDetailComponent, canActivate: [ AuthGuard ] },
    // { path: "product/new", component: NewProductComponent, canActivate: [ AuthGuard ] },
    // { path: "product/edit/:id", component: EditProductComponent, canActivate: [ AuthGuard ] },
    { path: "member", component: MemberComponent, canActivate: [ AuthGuard ] },
    { path: "book", component: BookComponent, canActivate: [ AuthGuard ] },
    { path: "staff", component: StaffComponent, canActivate: [ AuthGuard ] },
    { path: "borrow", component: BorrowComponent, canActivate: [ AuthGuard ] },
    { path: "return", component: ReturnComponent, canActivate: [ AuthGuard ] },
    { path: "search", component: SearchComponent, canActivate: [ AuthGuard ] },
    { path: "edit-book", component: BookComponent, canActivate: [ AuthGuard ] },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
