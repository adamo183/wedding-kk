export interface MenuItem {
  event: string;
  menu?: string[];
  subevents?: MenuItem[]; 
}