import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  studentsList = [
    {id:1, firstName: "Haytham"},
    {id:2, firstName: "Maria"},
    {id:3, firstName: "Rawan"}
  ];

}
