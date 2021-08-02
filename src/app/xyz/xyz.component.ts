 import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']
})
export class XyzComponent implements OnInit {

  @Input() hero : any 
  constructor() { }

  ngOnInit(): void {
  }

}
