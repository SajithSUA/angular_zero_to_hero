import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './component/navigation-bar/navigation-bar.component';
import { AngularFormComponent } from './component/angular-form/angular-form.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './component/details/details.component';
import { ExampleService } from './service/example.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AngularFormComponent,
    ReactiveFormComponent,
    HomeComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
