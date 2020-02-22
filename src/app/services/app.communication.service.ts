import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  receiverData: EventEmitter<number>;

  constructor(){
    this.receiverData = new EventEmitter<number>();
  }

  onReceiveData(data: number): void {
    this.receiverData.emit(data);
  }
}
