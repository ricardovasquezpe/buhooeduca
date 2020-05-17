import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute,
    private router: Router,
    private meta: Meta) { }

  ngOnInit() {
    this.setColorBar();
  }

  clickApp(app:string){
    this.router.navigate(['/app', app]);
  }

  setColorBar(){
    if(this.meta.getTag('name=theme-color')){
      this.meta.updateTag({ name: 'theme-color', content: "#fde172" });
    }else{
      this.meta.addTag({ name: 'theme-color', content: "#fde172" });
    }
    if(this.meta.getTag('name=msapplication-navbutton-color')){
      this.meta.updateTag({ name: 'msapplication-navbutton-color', content: "#fde172" });
    }else{
      this.meta.addTag({ name: 'msapplication-navbutton-color', content: "#fde172" });
    }
    if(this.meta.getTag('name=apple-mobile-web-app-status-bar-style')){
      this.meta.updateTag({ name: 'apple-mobile-web-app-status-bar-style', content: "#fde172" });
    }else{
      this.meta.addTag({ name: 'apple-mobile-web-app-status-bar-style', content: "#fde172" });
    }
  }
}
