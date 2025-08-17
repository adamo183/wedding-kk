import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/models/menuItem';

@Component({
  selector: 'app-weeding-menu',
  templateUrl: './weeding-menu.component.html',
  styleUrls: ['./weeding-menu.component.scss']
})
export class WeedingMenuComponent {
  @Input() public menu! : MenuItem[];
}
