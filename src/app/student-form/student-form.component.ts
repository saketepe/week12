import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { studentsDetails } from '../studentsDetails';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})

export class StudentFormComponent implements OnInit {
  constructor() { }

  student: studentsDetails;

  studentDB: studentsDetails;

  cities: any[];

  ngOnInit(): void {
    this.cities = [
      { name: "Toronto" },
      { name: "A" },
      { name: "B" },
      { name: "C" },
      { name: "D" },
      { name: "E" }
    ];
    this.student = {
      id: 545,
      firstname: "Haytham",
      lastname: "Qushtom",
      email: "ssss@dddd.com",
      city: "",
      gender: ""
    };
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.studentDB = {
        id: f.value.id,
        firstname: f.value.firstname,
        lastname: f.value.lastname,
        email: f.value.email,
        city: f.value.city,
        gender: f.value.gender
      }
    }

  }
}
