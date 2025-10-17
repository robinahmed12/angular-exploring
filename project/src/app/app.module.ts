import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { RecepiesComponent } from './components/recepies/recepies.component';
import { RecepieDetailsComponent } from './components/recepies/recepie-details/recepie-details.component';
import { RecepieItemComponent } from './components/recepies/recepie-list/recepie-item/recepie-item.component';
import { RecepieListComponent } from './components/recepies/recepie-list/recepie-list.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AddShoppingComponent } from './components/shopping-list/add-shopping/add-shopping.component';
import { AllRecipeComponent } from './pages/all-recipe/all-recipe.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { ManagRecipeComponent } from './pages/manag-recipe/manag-recipe.component';
import { RegisterComponent } from './Auhtentication/register/register.component';
import { LoginComponent } from './Auhtentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { NotFountComponent } from './components/not-fount/not-fount.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import { EditRecipeModalComponent } from './edit-recipe-modal/edit-recipe-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RecepiesComponent,
    RecepieDetailsComponent,
    RecepieItemComponent,
    RecepieListComponent,
    HeaderComponent,
    ShoppingListComponent,
    AddShoppingComponent,
    HeaderComponent,
    AllRecipeComponent,
    RecipeDetailsComponent,
    HomeComponent,
    BannerComponent,
    FooterComponent,
    ManagRecipeComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    SettingsComponent,
    NotFountComponent,
    AddRecipeComponent,
    EditRecipeModalComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
