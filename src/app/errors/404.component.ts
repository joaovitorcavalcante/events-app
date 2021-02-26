import { Component } from "@angular/core";
import { EventService } from "../events/shared/event.service";

@Component({
  template: `
    <h1 class="errorMessage">404</h1>
  `,
  styles: [`
    .errorMessage {
      margin-top: 150px;
      font-size: 170px;
      text-align: center;
    }
  `]
})
export class Error404Component {
  constructor(private eventService: EventService) {}
}
