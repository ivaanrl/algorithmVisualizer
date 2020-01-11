import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SleepService {
  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
