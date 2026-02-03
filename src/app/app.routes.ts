import { Routes } from '@angular/router';
import { Main } from './compnents/main/main';
import { All } from './compnents/all/all';


export const routes: Routes = [
   {path: "", component:Main},
   {path: "all", component:All},
 
];
