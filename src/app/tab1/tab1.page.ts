import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonTextarea } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonItem, 
    IonLabel, 
    IonTextarea, 
    IonList, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    FormsModule,
    ExploreContainerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab1Page {
  text: string = '';
  caracters: number = 0;
  words: number = 0;
  lines: number = 0;

  constructor() {}

  countText() {
    this.caracters = this.text.length;
    this.words = this.text.trim().split(/\s+/).filter((word) => word.length > 0).length;
    this.lines = this.text.split('\n').length;
  }
}
