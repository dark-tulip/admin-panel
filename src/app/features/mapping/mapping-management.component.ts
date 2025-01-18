import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../core/services/api.service';
import {MaterialModule} from '../../material.module';

@Component({
  selector: 'app-mapping-management',
  templateUrl: './mapping-management.component.html',
  styleUrls: ['./mapping-management.component.scss'],
  standalone: true,
  imports: [
    MaterialModule,
  ],
})
export class MappingManagementComponent {
  mappingForm: FormGroup; // Объявляем форму

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    // Инициализация формы
    this.mappingForm = this.fb.group({
      sourceDbConnectionId: ['', Validators.required],
      sinkDbConnectionId: ['', Validators.required],
      sourceSchemaName: ['', Validators.required],
      sinkSchemaName: ['', Validators.required],
      sourceTableName: ['', Validators.required],
      sinkTableName: ['', Validators.required],
      sourceColumnsList: ['', Validators.required],
      sinkColumnsList: ['', Validators.required],
    });
  }

  // Метод отправки формы
  submit(): void {
    const payload = {
      ...this.mappingForm.value,
      sourceColumnsList: this.mappingForm.value.sourceColumnsList.split(','),
      sinkColumnsList: this.mappingForm.value.sinkColumnsList.split(','),
    };

    this.apiService.validateSchemaMapping(payload).subscribe(
      (response) => {
        alert('Mapping validated successfully!');
        console.log(response);
      },
      (error) => {
        alert('Error validating mapping.');
        console.error(error);
      }
    );
  }
}
