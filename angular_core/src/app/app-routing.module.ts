
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CockpitComponent } from './Binding/cockpit/cockpit.component';
import { ServerElementComponent } from './Binding/server-element/server-element.component';
import { TemplateDrivenComponent } from './form/template-driven/template-driven.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { PipeComponent } from './pipe/pipe/pipe.component';

const routes: Routes = [{
  path: 'binding' , component: CockpitComponent 
},
{
  path: 'directive' , component:ServerElementComponent
},
{
path: "form-template" , component: TemplateDrivenComponent


},
{
  path: "reactive-form", component: ReactiveFormComponent
},
{
  path: "pipe",
  component: PipeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
