import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*import { MyservService } from "./myserv.service";
*/
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute) {
    this.id = Number(this.route.snapshot.params['id']);
    this.studentsDetails = [
      {id:1, firstName:"Haytham",lastName: "Qushtom",email:"dddd@dddd.com"},
      {id:2, firstName:"Maria",lastName: "Qushtom",email:"aaaaaa@aaaa.com"}
    ];
    this.student = this.studentsDetails.find(x => x.id === this.id);
  
   }
  ngOnInit(): void {
  }
  id:Number;
  studentsDetails;
  student;

}
