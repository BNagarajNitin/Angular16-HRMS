import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThemeComponent } from './theme/theme.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { StyleSwitcherComponent } from './style-switcher/style-switcher.component';


const routes: Routes = [
  { path: 'font-size', component: FontSizeComponent  },
  { path: 'theme', component: ThemeComponent},
  { path: 'style-switcher', component: StyleSwitcherComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StylesRoutingModule { }
