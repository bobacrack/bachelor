import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbModule } from 'primeng/breadcrumb';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AvatarModule } from 'primeng/avatar';
import { SliderModule } from 'primeng/slider';
import { RegisterComponent } from './register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RegisterAAComponent } from './register-aa/register-aa.component';
import { RegisterAAAComponent } from './register-aaa/register-aaa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegisterComponent,
    RegisterAAComponent,
    RegisterAAAComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    SliderModule,
    CalendarModule,
    InputTextModule,
    FormsModule,
    MenuModule,
    ToastModule,
    ButtonModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
