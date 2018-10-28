import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './components/logo/logo.component';
import { MainComponent } from './components/main/main.component';
import { TopMenusComponent } from './components/top-menus/top-menus.component';
import { CardDeckComponent } from './components/card-deck/card-deck.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    MainComponent,
    LogoComponent,
    TopMenusComponent,
    CardDeckComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
