import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../core/services/api.service';
import {MaterialModule} from '../../material.module';
import {NgIf} from '@angular/common';

export interface TableMappingInfo {
  tableMappingId: number;
  source: {
    datasourceConnectionId: number;
    schemaName: string;
    tableName: string;
    columnsList: string[];
  };
  sink: {
    datasourceConnectionId: number;
    schemaName: string;
    tableName: string;
    columnsList: string[];
  };
}

@Component({
  selector: 'app-connectors-registration',
  templateUrl: './connector-registration.component.html',
  styleUrls: ['./connector-registration.component.scss'],
  imports: [
    MaterialModule,
    NgIf,
  ]
})
export class ConnectorRegistrationComponent implements OnInit {
  tableMappingId: number = 1;
  tableMappingInfo?: TableMappingInfo;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.fetchTableMappingInfo();
  }

  fetchTableMappingInfo(): void {
    this.apiService.getTableMappingInfo(this.tableMappingId).subscribe(
      (data: TableMappingInfo) => {
        this.tableMappingInfo = data;
      },
      (error) => {
        alert('Error fetching table mapping information.');
        console.error(error);
      }
    );
  }

  runSync(): void {
    this.registerSink();
    this.registerSource();
  }
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
