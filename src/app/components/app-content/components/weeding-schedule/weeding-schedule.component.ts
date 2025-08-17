import { Component, Input } from '@angular/core';
import { ScheduleItem } from 'src/models/scheduleItem';

@Component({
  selector: 'app-weeding-schedule',
  templateUrl: './weeding-schedule.component.html',
  styleUrls: ['./weeding-schedule.component.scss']
})
export class WeedingScheduleComponent {
    @Input() public schedule! : ScheduleItem[];
}
