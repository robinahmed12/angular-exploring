import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CockpitComponent } from './Binding/cockpit/cockpit.component';
import { ServerElementComponent } from './Binding/server-element/server-element.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directive/hightlight.directive';
import { UserComponent } from './components/user/user.component';
import { AccountComponent } from './components/account/account.component';
import { NewAccountComponent } from './components/new-account/new-account.component';
import { CounterComponent } from './components/counter/counter.component';
import { CartComponent } from './components/cart/cart.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { ChildComponent } from './component-communication/parent/child/child.component';
import { ParentContentComponent } from './content-projection/parent-content/parent-content.component';
import { ChildContnetComponent } from './content-projection/parent-content/child-contnet/child-contnet.component';


@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    HighlightDirective,
    UserComponent,
    AccountComponent,
    NewAccountComponent,
    CounterComponent,
    CartComponent,
    ParentComponent,
    ChildComponent,
    ParentContentComponent,
    ChildContnetComponent,


  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
