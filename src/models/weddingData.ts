import { MenuItem } from "./menuItem";
import { ScheduleItem } from "./scheduleItem";

export interface WeddingData {
  schedule: ScheduleItem[];
  menu: MenuItem[];
}