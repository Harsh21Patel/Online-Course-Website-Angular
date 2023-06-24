import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ContactComponent } from './contact/contact.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { FilterPipe } from './filter.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { Hero2Component } from './hero2/hero2.component';
import { FsdComponent } from './fsd/fsd.component';
import { DigitalmarketingComponent } from './digitalmarketing/digitalmarketing.component';
import { MlComponent } from './ml/ml.component';
import { PythonComponent } from './python/python.component';
import { CandcppComponent } from './candcpp/candcpp.component';
import { DatasciComponent } from './datasci/datasci.component';
import { AndroidComponent } from './android/android.component';
import { StockmarketComponent } from './stockmarket/stockmarket.component';
import { AutocadComponent } from './autocad/autocad.component';
import { HackingComponent } from './hacking/hacking.component';

const appRoutes:Routes=[
  {path:'home',component:AppComponent},
  {path:'contact',component:ContactComponent},
  {path:'signup',component:CreateaccountComponent}, 
  {path:'signin',component:LoginComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'about',component:AboutComponent},
  {path:'course',component:PipesComponent},
  {path:'python',component:PythonComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    ContactComponent,
    CreateaccountComponent,
    LoginComponent,
    FeedbackComponent,
    AboutComponent,
    FilterPipe,
    PipesComponent,
    Hero2Component,
    FsdComponent,
    DigitalmarketingComponent,
    MlComponent,
    PythonComponent,
    CandcppComponent,
    DatasciComponent,
    AndroidComponent,
    StockmarketComponent,
    AutocadComponent,
    HackingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
