import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ControlCustomModule } from './modules/control-custom/control-custom.module';
import { APP_ROUTES } from './app.routes';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),  
    ControlCustomModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
