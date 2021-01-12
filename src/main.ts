import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './modules/app.module';
import { applyConfig, environment } from './environments/environment';

import * as e6p from 'es6-promise';
(e6p as any).polyfill();
import 'isomorphic-fetch';

fetch(`assets/config/${location.hostname.toLowerCase().trim()}/config.json`).then(response => {
  return response.json();
})
  .then(data => {
    applyConfig(data);
    if (environment.production) {
      enableProdMode();
    }
    platformBrowserDynamic().bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });
