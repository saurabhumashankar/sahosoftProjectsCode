import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CustomerPortal';

  constructor(private _translate: TranslateService) {
    _translate.addLangs(['en', 'hi']);
     _translate.setDefaultLang('en');
  }
   changeLang(language: string) {
     this._translate.use(language);
 }

  
}
