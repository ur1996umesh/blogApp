import { Component,Oninit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'blogApp';
  ngOnInit(){
  console.log('yes');
    return;
  }
}
