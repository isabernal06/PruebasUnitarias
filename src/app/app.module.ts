import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './users.service';
import { PersonRowComponent } from './person-row/person-row.component';
import { UserRowComponent } from './user-row/user-row.component';
import { UserListComponent } from './user-list/user-list.component';
import { ReversePipe } from './reverse.pipe';
import { FormSkuComponent } from './form-sku/form-sku.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonRowComponent,
    UserRowComponent,
    UserListComponent,
    ReversePipe,
    FormSkuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
