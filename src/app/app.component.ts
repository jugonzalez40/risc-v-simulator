import { Component, ViewChild, ViewChildren } from '@angular/core';
import { OutputComponent } from './output/output.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rgod';

  @ViewChild('outComponent', {static:false}) outComponent;

  play() {
    console.log('??')
    this.outComponent.play();
  }
}
