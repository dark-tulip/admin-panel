import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../core/services/api.service';
import {MaterialModule} from '../../material.module';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-connection-management',
  templateUrl: './connection-management.component.html',
  styleUrls: ['./connection-management.component.scss'],
  imports: [
    MaterialModule,
  ]
})
export class ConnectionManagementComponent {
  connectionForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.connectionForm = this.fb.group({
      dbType: ['postgresql', Validators.required],
      url: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      isActive: [true],
    });
  }

  submit(): void {
    this.apiService.addConnection(this.connectionForm.value).subscribe(
      (response) => {
        alert('Connection added successfully!');
        console.log(response);
      },
      (error) => {
        alert('Error adding connection.');
        console.error(error);
      }
    );
  }
}
