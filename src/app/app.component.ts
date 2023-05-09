import { Component } from '@angular/core';
import { ConfigService } from './config.service';
import { SettingsService } from './settings.service';
import { DomSanitizer } from '@angular/platform-browser';
 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Test display image';
  thumbnail: any;
  
  constructor(private config: ConfigService,public setting:SettingsService, private sanitizer: DomSanitizer) { }
 
  ngOnInit() {
     this.config.getData()
      .subscribe((baseImage : any) => {
        //alert(JSON.stringify(data.image));
        let objectURL = 'data:image/jpeg;base64,' + baseImage.image; 
         this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
       
      });
    //console.log(this.setting.snippet)
    
  }
}
