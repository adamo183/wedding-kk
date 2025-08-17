import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent {
    @Output() menuClick = new EventEmitter<string>();
  
    scrollTo(sectionId: string) {
      this.menuClick.emit(sectionId);
    }
}
