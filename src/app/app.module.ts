import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailsComponent } from './details/details.component';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './user.service';
import { DxDataGridModule,
  DxBulletModule,
  DxTemplateModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpClientModule,
    ReactiveFormsModule,AppRoutingModule,DxDataGridModule,DxTemplateModule,DxBulletModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
