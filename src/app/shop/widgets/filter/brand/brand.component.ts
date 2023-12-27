import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import *as  $ from 'jquery';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  @Input() brands: any[] = [];
  @Output() brandFilter: EventEmitter<any[]> = new EventEmitter<any[]>();
  selectedBrands: any[] = [];

  constructor() { }

  ngOnInit(): void {
    $("#brandToggleId").on('click', function(e) {
      e.preventDefault();
      $(this).next("#brandToggle").slideToggle();
    })
  }
  selectBrands(event: any) {
    if (event.target.checked) {
      this.selectedBrands.push(event.target.value)
    } else {
      let index = this.selectedBrands.indexOf(event.target.value);
      this.selectedBrands.splice(index, 1);
    }
    this.brandFilter.emit(this.selectedBrands);
    
  }
}
