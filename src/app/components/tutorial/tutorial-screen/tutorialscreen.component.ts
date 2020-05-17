import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

declare var $: any;

@Component({
  selector: 'tutorialscreen',
  templateUrl: './tutorialscreen.component.html',
  styleUrls: ['./tutorialscreen.component.css']
})
export class TutorialScreenComponent implements OnInit {
  currentStep : any;
  currentStepIndex : any;
  steps_val: any;
  nextWord: string;
  initComponent: boolean = false;
  clickEventArea: () => void;
  @Input()
  public set steps(steps: any) {
    this.steps_val = steps;
    this.initFirstStepSession();
    this.showToolTip();
  }
  @ViewChild('mapCoordsEle', {static: false}) mapCoordsEle: ElementRef;

  @Output() tutorialScreenEvent = new EventEmitter<any>();

  constructor(private renderer: Renderer2) { }

  ngOnInit() {}

  ngAfterViewInit(){
    this.initComponent = true;
  }

  initFirstStepSession(){
    if(this.initComponent){
      this.mapCoordsEle.nativeElement.innerHTML = '';
    }
    this.currentStepIndex = 0;
    this.currentStep = this.steps_val[0];
    this.nextWord = "Empezar";
  }

  nextStep(){
    if(this.currentStepIndex + 1 != this.steps_val.length){
      this.currentStepIndex++;
      this.currentStep = this.steps_val[this.currentStepIndex];
      this.mapCoordsEle.nativeElement.innerHTML = '<map name="m_usaMap"><area shape="poly" coords="'+this.currentStep.stepCoords+'" href="javascript:void(0);"></map>';
      $('map').imageMapResize();
      this.showToolTip();
      if (this.clickEventArea) {
        this.clickEventArea();
      }
      this.clickEventArea = this.renderer.listen(this.mapCoordsEle.nativeElement, 'click', (evt) => {
        this.nextStep();
      });
      this.nextWord = "Siguiente";
      if(this.currentStepIndex + 1 == this.steps_val.length){
        this.nextWord = "Siguiente lección";
      }
    }else{
      this.tutorialScreenEvent.emit();
    }
  }

  prevStep(){
    if(this.currentStepIndex -1  >= 0 ){
      this.currentStepIndex--;
      this.currentStep = this.steps_val[this.currentStepIndex]; 
      this.mapCoordsEle.nativeElement.innerHTML = '<map name="m_usaMap"><area id="area" shape="poly" coords="'+this.currentStep.stepCoords+'" href="javascript:void(0);"></map>';
      $('map').imageMapResize();
      this.showToolTip();
      if (this.clickEventArea) {
        this.clickEventArea();
      }
      this.clickEventArea = this.renderer.listen(this.mapCoordsEle.nativeElement, 'click', (evt) => {
        this.nextStep();
      });
      if(this.currentStepIndex + 1 <= this.steps_val.length - 1){
        this.nextWord = "Siguiente";
      }
    }else{
      console.log("no hay mas atras");
    }
  }

  showToolTip(){
    $('div.qtip').remove();
    if(this.currentStep.stepCoords != "0"){
      $('area').qtip({
        prerender: false,
        overwrite: true,
        style: {
          classes: 'qtip-bootstrap'
        },
        content: {
          text: 'Da click aqui'
        },
        hide: false
      });
      $('area').trigger('mouseover');
    }
  }
}