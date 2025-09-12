import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { register as registerSwipper } from 'swiper/element/bundle';
import { AppModule } from './app/app.module';

registerSwipper();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
