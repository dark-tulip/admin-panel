import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ConnectorRegistrationComponent } from './connector-registration.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ConnectorRegistrationComponent,
  ],
  exports: [ConnectorRegistrationComponent],
})
export class ConnectorRegistrationModule {}
