import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

interface Role {
  value: string;
  viewValue: string;
}
interface Account {
  value: string;
  viewValue: string;
}

interface Owner {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component {
  selectedValue: string;

  constructor(private router: Router){
    this.selectedValue = '';
  }

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 5, color: '#B0BEC5'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  tilesTab2: Tile[] = [
    {text: 'One', cols: 3, rows: 6, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  ];
  tilesTab3: Tile[] = [
    {text: 'One', cols: 3, rows: 5, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  tilesTab4: Tile[] = [
    {text: 'One', cols: 3, rows: 5, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];


  roles: Role[] = [
    {value:'cheque-0',viewValue:'Cheque/Current'},
    {value:'savings-1',viewValue:'Savings'},
    {value:'credit-2',viewValue:'Credit'},
    {value:'Cash-3',viewValue:'Cash'},
  ];

  accounts: Account[] = [
    {value:'account-0',viewValue:'sample account 1'},
    {value:'account-1',viewValue:'sample account 2'},
    {value:'account-2',viewValue:'sample account 3'},
    {value:'account-3',viewValue:'sample account 4'},
  ];

  owners: Owner[] = [
    {value:'owner-0',viewValue:'sample owner 1'},
    {value:'owner-1',viewValue:'sample owner 2'},
    {value:'owner-2',viewValue:'sample owner 3'},
    {value:'owner-3',viewValue:'sample owner 4'},
  ];

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];
}
