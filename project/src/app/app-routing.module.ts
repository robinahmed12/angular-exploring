import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllRecipeComponent } from './pages/all-recipe/all-recipe.component';
import { ManagRecipeComponent } from './pages/manag-recipe/manag-recipe.component';
import { LoginComponent } from './Auhtentication/login/login.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { AuthGuard } from './guard/auth.guard';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { UnsavedGuard } from './services/unsaved.guard';
import { NotFountComponent } from './components/not-fount/not-fount.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';
import { AddIngredientsComponent } from './pages/add-ingredients/add-ingredients.component';
import { MealComponent } from './pages/meal/meal.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'all-recipe',
    component: AllRecipeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'recipe-details/:id/:name',
    component: RecipeDetailsComponent,
  },
  {
    path: 'add-recipe',
    component: AddRecipeComponent,
  },
  {
    path:"meals",
    component: MealComponent
  },
  {
    path: 'add-ingredient',
    component: AddIngredientsComponent
  },
  {
    path: 'manage-recipe',
    component: ManagRecipeComponent,
  },
  {
    path: 'login',

    component: LoginComponent,
    canDeactivate: [UnsavedGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
        canDeactivate: [UnsavedGuard],
      },

      { path: 'settings', component: SettingsComponent },
    ],
  },
  { path: 'not-found', component: NotFountComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
