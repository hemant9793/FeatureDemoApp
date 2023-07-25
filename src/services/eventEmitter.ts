// Library Imports
import { Subject } from "rxjs";

export default class EventEmitter {
    private observable:any
  constructor() {
    this.observable = new Subject();
  }

  getObservable() {
    return this.observable;
  }

  emit(eventType:string, data:any) {
    this.observable.next({
      type: eventType,
      data,
    });
  }
}
