import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {
  }

  getMetadata(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/datasource/metadata/info`, payload);
  }

  addConnection(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/datasource/connection/add`, payload);
  }

  validateSchemaMapping(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/datasource/connection/register/table-mapping`, payload);
  }

  registerSourceConnector(tableMappingId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/connectors/register/source?tableMappingId=${tableMappingId}`, {});
  }

  registerSinkConnector(tableMappingId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/connectors/register/sink?tableMappingId=${tableMappingId}`, {});
  }
}
