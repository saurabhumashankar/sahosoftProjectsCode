import { Component, OnInit } from '@angular/core';
import *as $ from 'jquery';
@Component({
  selector: 'app-new-catogry',
  templateUrl: './new-catogry.component.html',
  styleUrls: ['./new-catogry.component.scss']
})
export class NewCatogryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $("#categoryToggleId").on('click', function (e) {
      e.preventDefault();
     // $(".#categoryToggle").slideToggle();    all same class will be execute.
     $(this).next("#categoryToggle").slideToggle();
    })
  }
}
