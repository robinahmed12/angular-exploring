import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecepiesComponent } from './components/recepies/recepies.component';
import { HomeComponent } from './home/home.component';
import { AllRecipeComponent } from './pages/all-recipe/all-recipe.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { ManagRecipeComponent } from './pages/manag-recipe/manag-recipe.component';
import { LoginComponent } from './Auhtentication/login/login.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'all-recipe',
    component: AllRecipeComponent,
  },
   {
    path: 'all-recipe/:id/:name',
    component: RecipeDetailsComponent,
  },
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
  },
  {
    path: 'manage-recipe',
    component: ManagRecipeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
