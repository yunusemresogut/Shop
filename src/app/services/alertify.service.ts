import { Injectable } from '@angular/core';
declare let alertify: any; // sistemdeki js dosyalarında alertify tarayıp buluyor ve ekliyor.

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  warning(message: string) {
    alertify.warning(message);
  }
  error(message: string) {
    alertify.error(message);
  }
  success(message: string) {
    alertify.success(message);
  }
}
