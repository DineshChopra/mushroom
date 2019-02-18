import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  static cloneObject(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }
}
