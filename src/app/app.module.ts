import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CssComponent } from './css/css.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';


@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    LifecycleComponent,
    CssComponent,
    NgStyleComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
