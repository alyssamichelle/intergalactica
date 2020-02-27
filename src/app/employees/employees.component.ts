import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees;
  
  constructor(private employeesService:EmployeesService) { }

  ngOnInit(): void {

    this.employeesService.getPeople().subscribe(
      (data)=> {
        return this.employees = data;
      }
    );

  }

}
