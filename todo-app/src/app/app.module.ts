import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoInputComponent } from './component/todo-input/todo-input.component';
import { FormsModule } from '@angular/forms';
import { TodoOutputComponent } from './component/todo-output/todo-output.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoInputComponent,
    TodoOutputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
