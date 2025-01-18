import { Component } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import {MatFormField} from '@angular/material/form-field';
import {MatCard, MatCardActions, MatCardContent} from '@angular/material/card';
import {MatInput} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MaterialModule} from '../../material.module';

@Component({
  selector: 'app-connectors-registration',
  templateUrl: './connector-registration.component.html',
  styleUrls: ['./connectors-registration.component.scss'],
  imports: [
    MaterialModule,
  ]
})
export class ConnectorRegistrationComponent {
  tableMappingId: number = 1;

  constructor(private apiService: ApiService) {}

  registerSource(): void {
    this.apiService.registerSourceConnector(this.tableMappingId).subscribe(
      () => alert('Source connectors registered successfully!'),
      (error) => {
        alert('Error registering source connectors.');
        console.error(error);
      }
    );
  }

  registerSink(): void {
    this.apiService.registerSinkConnector(this.tableMappingId).subscribe(
      () => alert('Sink connectors registered successfully!'),
      (error) => {
        alert('Error registering sink connectors.');
        console.error(error);
      }
    );
  }
}
