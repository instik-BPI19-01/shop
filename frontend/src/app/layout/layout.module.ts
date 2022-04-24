import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [RouterModule],
  exports: [FooterComponent, HeaderComponent],
})
export class LayoutModule {}