import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ApiService } from '../../services/api.service';
import { Router, ActivatedRoute } from "@angular/router";
import { Meta } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-aplicacion',
  templateUrl: './aplicacion.component.html',
  styleUrls: ['./aplicacion.component.css']
})
export class AplicacionComponent implements OnInit {
  
  constructor(
    private titleService:Title,
    private api: ApiService,
    private router: Router,
    private meta: Meta,
    private route: ActivatedRoute) { }

  searchName : string;
  appData : any;
  steps : any;
  sessions : any;
  color : any;
  name : any;
  currentSession : number = 1;
  loading: boolean = true;

  ngOnInit() {
    this.currentSession = 1;
    this.getAppData();
    console.log(1);
  }

  ngAfterViewInit(){
  }

  getAppData(){
    this.route.params.subscribe(params => this.searchName = params.searchApp);
    this.api.getAppData(this.searchName).subscribe(
      data => {
        this.appData = data;
        this.titleService.setTitle(this.appData.appName + " | BuhooEduca");
        //this.steps = this.appData.sessions[0].steps;
        this.sessions = this.appData.sessions;
        this.color = this.appData.appColor;
        this.name = this.appData.appName;
        this.setColorBar();
        this.loading = false;
        this.showInitialWelcomeModal();
    },
    err => {
      this.loading = false;

    });
  }

  onItemListSelected(session){
    this.currentSession = session.sessionOrder;
    this.steps = session.steps;
  }

  onNextLessonSelected(){
    if(this.currentSession != this.sessions.length){
      for (let i = 0; i < this.sessions.length; i++) {
        if(this.sessions[i].sessionOrder == this.currentSession + 1){
          this.steps = this.sessions[i].steps;
          this.currentSession = this.sessions[i].sessionOrder;
          return true;
        }
      }
    }else{
      $('#finishModal').modal();
    }
  }

  showInitialWelcomeModal(){
    //if(!localStorage.getItem("alreadySeen")){
      //localStorage.setItem("alreadySeen", "1");
    //}
    if(this.name.length){
      $('#welcomeModal').modal({backdrop: 'static', keyboard: false});
    }
  }

  goHome(){
    $('#finishModal').modal('toggle');
    this.router.navigateByUrl("/");
  }

  setColorBar(){
    if(this.meta.getTag('name=theme-color')){
      this.meta.updateTag({ name: 'theme-color', content: this.color });
    }else{
      this.meta.addTag({ name: 'theme-color', content: this.color });
    }
    if(this.meta.getTag('name=msapplication-navbutton-color')){
      this.meta.updateTag({ name: 'msapplication-navbutton-color', content: this.color });
    }else{
      this.meta.addTag({ name: 'msapplication-navbutton-color', content: this.color });
    }
    if(this.meta.getTag('name=apple-mobile-web-app-status-bar-style')){
      this.meta.updateTag({ name: 'apple-mobile-web-app-status-bar-style', content: this.color });
    }else{
      this.meta.addTag({ name: 'apple-mobile-web-app-status-bar-style', content: this.color });
    }
  }

  ngOnDestroy() {
    $('div.qtip').remove();
  }
}
