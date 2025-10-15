// unsaved.guard.ts
import { Injectable } from '@angular/core';
import {
  CanDeactivate
} from '@angular/router';
import { CanComponentDeactivate } from './interface.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UnsavedGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): boolean | Observable<boolean>  {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
