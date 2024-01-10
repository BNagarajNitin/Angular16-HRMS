import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontSizeComponent } from './font-size/font-size.component';
import { ThemeComponent } from './theme/theme.component';
import { SharedModule } from '@shared/shared.module';
import { StylesRoutingModule } from './styles-routing.module';
import { StyleSwitcherComponent } from './style-switcher/style-switcher.component';
import { MatSelectModule } from '@angular/material/select';
import { DynamicStyleDirective } from './dynamic-style.directive';



@NgModule({
  declarations: [
    FontSizeComponent,
    ThemeComponent,
    StyleSwitcherComponent,
    DynamicStyleDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    StylesRoutingModule,
    MatSelectModule
  ]
})
export class StylesModule { }
