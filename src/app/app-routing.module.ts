import {Routes} from '@angular/router';
import {ConnectionManagementComponent} from './features/connections/connection-management.component';
import {MappingManagementComponent} from './features/mapping/mapping-management.component';
import {ConnectorRegistrationComponent} from './features/connectors/connector-registration.component';

export const routes: Routes = [
    {path: 'connections', component: ConnectionManagementComponent},
    {path: 'mapping', component: MappingManagementComponent},
    {path: 'connectors', component: ConnectorRegistrationComponent},
    {path: '', redirectTo: '/connections', pathMatch: 'full'},
    {path: '**', redirectTo: '/connections'},
];
