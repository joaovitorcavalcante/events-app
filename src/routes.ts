import { Routes } from "@angular/router";

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListResolver,
  EventRouteActivator,
  EventsListComponent
} from "./app/events/index";

import { Error404Component } from "./app/errors/404.component";

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventListResolver }
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: '404', component: Error404Component },
  {
    path: 'user',
    loadChildren: () => import('./app/user/user.module').then(m => m.UserModule)
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];
