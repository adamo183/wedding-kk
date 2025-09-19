import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { WeddingData } from 'src/models/weddingData';
import { DataService } from 'src/services/dataService';

@Component({
  selector: 'app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.scss']
})
export class AppContentComponent implements OnInit, OnDestroy {
  constructor(private dataService: DataService) {}
  public weddingInfo!: WeddingData;
  public dataSubs!: Subscription;

  ngOnInit() {
    this.dataSubs = this.dataService.loadData().subscribe(res => {
      this.weddingInfo = res;
    });
  }

  ngOnDestroy(): void {
     this.dataSubs.unsubscribe();
  }

  public scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
