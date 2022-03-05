import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomControlModule } from './modules/custom-control/custom-control.module';
import { APP_ROUTES } from './app.routes';
import { Vuce2MaterialModule } from 'projects/vuce2-custom/src/public-api';

const vuce2Modules = [
  Vuce2MaterialModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    vuce2Modules,
    CustomControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
