import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testanimations',
  templateUrl: './testanimations.component.html',
  styleUrls: ['./testanimations.component.css']
})
export class TestanimationsComponent {

  isLoading: boolean = false;

  constructor(private router: Router){
  }

  ngOnInit(): void{}

  test(){
    this.isLoading = true;
    setTimeout(()=>{this.router.navigate(['/login'])},1000)
  }

}
