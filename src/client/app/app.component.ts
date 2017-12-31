import { Component } from '@angular/core';

/**
 * This class represents the main application component.
 */
@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
  }

  isCollapsed = false;
}
