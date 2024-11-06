
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './direct/nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [{
  
   path:"nosotros",component:NosotrosComponent
},{
    path:"inicio",component:InicioComponent
},{
    path:"",component:InicioComponent
}, {path :"dashboard", component: DashboardComponent}]
