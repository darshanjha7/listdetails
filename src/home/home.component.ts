import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { elementAt } from 'rxjs';

export interface PeriodicElement {
  listName: string;
  date: Date;
  noOfEntities: number;
  action:string;
  details:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: new Date(), listName: 'Hydrogen', noOfEntities: 2, action: '',details:"The sky was a deep shade of blue as the sun began to set over the mountains. A gentle breeze rustled the leaves of the trees, and birds sang their evening songs. The air was crisp and cool, and the world seemed to be at peace. As the last rays of light disappeared below the horizon"},
  {date: new Date(), listName: 'Helium', noOfEntities: 4, action: 'He',details:"A gentle breeze rustled the leaves of the trees, and birds sang their evening songs. The air was crisp and cool, and the world seemed to be at peace. As the last rays of light disappeared below the horizon"},
  {date: new Date(), listName: 'Lithium', noOfEntities: 6, action: 'Li',details:"The sun was setting over the mountain range, casting a beautiful orange and pink glow over the landscape. The air was crisp and cool, and a gentle breeze rustled through the trees."},
  {date: new Date(), listName: 'Beryllium', noOfEntities: 9, action: 'Be',details:"The sun was setting over the mountains, casting a warm orange glow over the valley below. Birds sang their final songs of the day as they settled into their nests for the night. A gentle breeze rustled through the trees"},
  {date: new Date(), listName: 'Boron', noOfEntities: 10, action: 'B',details:"The sun was setting over the mountain range, casting a beautiful orange and pink glow over the landscape. The air was crisp and cool, and a gentle breeze rustled through the trees."},
  {date: new Date(), listName: 'Carbon', noOfEntities: 12, action: 'C',details:"The sky was a deep shade of blue as the sun began to set over the mountains. A gentle breeze rustled the leaves of the trees, and birds sang their evening songs. The air was crisp and cool, and the world seemed to be at peace. As the last rays of light disappeared below the horizon"},
  {date: new Date(), listName: 'Nitrogen', noOfEntities: 14, action: 'N',details:"The sun was setting over the horizon, casting a warm glow over the landscape. The sky was a beautiful shade of pink and orange"},
  {date: new Date(), listName: 'Oxygen', noOfEntities: 15, action: 'O',details:"The sky was a deep shade of blue as the sun began to set over the mountains. A gentle breeze rustled the leaves of the trees, and birds sang their evening songs. The air was crisp and cool, and the world seemed to be at peace. As the last rays of light disappeared below the horizon, "},
  {date: new Date(), listName: 'Fluorine', noOfEntities: 18, action: 'F',details:"The sun was setting over the horizon, casting a warm glow over the landscape. The sky was a beautiful shade of pink and orange"},
  {date: new Date(), listName: 'Neon', noOfEntities: 20, action: 'Ne',details:"TThe sun was setting over the mountains, casting a warm orange glow over the valley below. Birds sang their final songs of the day as they settled into their nests for the night. A gentle breeze rustled through the trees"},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ['date', 'listName', 'noOfEntities', 'action','details'];
  dataSource =  new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  details=""
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 
  showDetails(element:any){
    this.details=element.details
  }
}
