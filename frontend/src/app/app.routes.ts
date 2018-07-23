import { Routes, RouterModule} from "@angular/router";
import { HomeComponent} from "./home/home.component";
import { ModuleWithProviders} from "@angular/core";
import { AutorComponent} from "./autor/autor.component";
import { LibroComponent} from "./libro/libro.component";
import { CarritoComponent} from "./carrito/carrito.component";

export const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'autor/:idautor',component:AutorComponent},
  {path:'autor/:idautor/:libro/:idLibro',component:LibroComponent},
  {path:'carrito',component:CarritoComponent},

];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
