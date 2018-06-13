import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SloganComponent } from './components/slogan/slogan.component';
import { FaqComponent } from './components/faq/faq.component';
import { PrestationsComponent } from './components/prestations/prestations.component';
import { AProposComponent } from './components/a-propos/a-propos.component';

import { MainService } from './services/main.service';
import { ContactService } from './components/contact/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PortfolioComponent,
    SloganComponent,
    FaqComponent,
    PrestationsComponent,
    AProposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [MainService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
