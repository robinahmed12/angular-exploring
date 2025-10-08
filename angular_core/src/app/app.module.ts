import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CockpitComponent } from './Binding/cockpit/cockpit.component';
import { ServerElementComponent } from './Binding/server-element/server-element.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directive/hightlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
   HighlightDirective
   
  
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
