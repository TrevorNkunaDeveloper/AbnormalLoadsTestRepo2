import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoading: boolean = false;
  selectedValue: string;

  constructor(private router: Router){
    this.selectedValue = '';
  }

  ngOnInit(): void{}

  login(){
    this.isLoading = true;
    setTimeout(()=>{this.router.navigate(['/'])},2000)
  }

  roles: Role[] = [
    {value:'operator-0',viewValue:'Operator'},
    {value:'admin-1',viewValue:'Admin'},
    {value:'engineer-2',viewValue:'Engineer'},
    {value:'supervisor-3',viewValue:'Supervisor'},
  ];
}
