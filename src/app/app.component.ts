import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // currentLanguage="en";
  // constructor(private translate: TranslateService) {
  //   translate.setDefaultLang(this.currentLanguage);
  //   translate.use(this.currentLanguage);
  // }
  // changeLanguage(event:any){
  //  this.currentLanguage= event.target.value;
  //  this.translate.setDefaultLang(this.currentLanguage);
  //  this.translate.use(this.currentLanguage);
  // }
}
