import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-datagrid-component',
  template:`
    <h3>Dynamic Table</h3>
    <table class="table table-bordered table-striped">
      <tr>
        <td>
          <input type="radio" name="r" (click)="color='red'"> Red
        </td>
        <td>
          <input type="radio" name="r" (click)="color='blue'"> Blue
        </td>
        <td>
          <input type="radio" name="r" (click)="color='yellow'"> Yellow
        </td>
      </tr>
    </table>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th *ngFor="let h of tableHeaders">{{h}}</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let row of DataSource" [setColor]="color" (click)="onRowSelection(row)">
          <td *ngFor="let h of tableHeaders">{{row[h]}}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class DataGridComponent implements OnInit {
  private _DataSource: Array<any>;
  tableHeaders: Array<string>;
  color: string;
  @Output()
  rowSelection: EventEmitter<any>;
  constructor() {
    this.color= '';
    this._DataSource = new Array<any>();
    this.tableHeaders = new Array<string>();
    this.rowSelection = new EventEmitter<any>();
  }

  @Input()
  set DataSource(v: Array<any>) {
     if(v.length > 0) {
       this._DataSource = v;
      // read 0th record from array and read its schema
      // to generate table header
       for(let p in this._DataSource[0]) {
          this.tableHeaders.push(p);
       }
     }
  }
  get DataSource(): Array<any> {
     return this._DataSource;
  }
  ngOnInit(): void { }
  onRowSelection(row: any) {
    alert('dd');
    this.rowSelection.emit(row);
  }
}
