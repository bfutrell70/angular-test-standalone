import { Routes } from '@angular/router';
import { TestComponent } from './test-component/test-component';

export const routes: Routes = [
  {path: 'test-component', component: TestComponent, pathMatch: 'full' },
];
