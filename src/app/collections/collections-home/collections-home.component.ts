import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    {name : 'ali' , age : 24 , job : 'designer'},
    {name : 'reza' , age : 29 , job : 'enginer'},
    {name : 'sara' , age : 15 , job : 'ui'}
  ];
  headers = [
    {key:'name',value:'Name',show:true},
    {key:'age',value:'Age',show:true},
    {key:'job',value:'job',show:true}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
