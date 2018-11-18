import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private _flag: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public flagEvent = this._flag.asObservable();

  constructor() { }

  emitFlag(value: boolean): void {
    this._flag.next(value);
  }
}
