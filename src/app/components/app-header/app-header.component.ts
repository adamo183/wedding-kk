import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  public countdownText: string = '';
  public targetDate = new Date('2025-09-27T00:00:00');
  intervalId: any;

  ngOnInit(): void {
    this.updateCountdown();
    this.intervalId = setInterval(() => this.updateCountdown(), 1000 * 60 * 60);
  }

    updateCountdown(): void {
    const now = new Date();

    if (now.getFullYear() === 2025 && now.getMonth() === 8 && now.getDate() === 27) {
      this.countdownText = 'To dziś!';
      return;
    }

    const diffTime = this.targetDate.getTime() - now.getTime();

    if (diffTime <= 0) {
      this.countdownText = '';
      return;
    }

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    this.countdownText = `Pozostało ${days} dni!`;
  }
}
