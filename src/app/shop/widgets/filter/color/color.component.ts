import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import *as $ from 'jquery';


@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
@Input()colors : any[] = [];
@Output() colorFilter: EventEmitter<any[]> = new EventEmitter<any[]>();

activeColor : any = "";
  constructor() { }

  ngOnInit(): void {
    $("#colorToggleId").on('click', function (e) {
      e.preventDefault();
     // $(".#colorToggle").slideToggle();    all same class will be execute.
     $(this).next("#colorToggle").slideToggle();
    });
  }
  selectColor(cls : any){
    this.activeColor = cls.color;

    if(cls.color){
this.colorFilter.emit([cls]);
    }else{
      this.colorFilter.emit([]);

    }
  }
}
