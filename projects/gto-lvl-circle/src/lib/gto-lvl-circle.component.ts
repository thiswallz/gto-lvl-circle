import { Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy, Input, Renderer2, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'gto-lvl-circle',
  template: `
    <svg 
        #lvlCircle
        [attr.width]="width" 
        [attr.height]="height" 
        viewBox="0 0 100 100"> 
    </svg>
    <ng-content></ng-content>
  `,
  styleUrls: ['gto-lvl-circle.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GtoLvlCircleComponent implements OnInit, OnChanges,  AfterViewInit {
  @ViewChild('lvlCircle', {static: false}) lvlCircle: ElementRef;
  @Input()
  circles: number = 3;
  @Input()
  colors: string[] = ["white", "white", "white"];
  @Input()
  width: number = 120;
  @Input()
  height: number = 120;
  @Input()
  percent: number = 0;
  @Input()
  stroke: number = 0;
  @Input()
  shadowColor: string = 'gray';
  
  private _cx = '50';
  private _cy = '50';

  constructor(private renderer:Renderer2) { }

  ngOnInit() {
  }
  
  ngAfterViewInit(){
    for(let i = 0; i < this.circles; i++ ){
      const circle = this.createCircleElement('circle-'+i, i);
      const shadowCircle = this.createCircleElement('scircle-'+i, i, this.shadowColor);
      this.lvlCircle.nativeElement.appendChild(shadowCircle);
      this.lvlCircle.nativeElement.appendChild(circle);
    }
    for( let i = 0; i < this.circles; i++ ){
      const circle = this.lvlCircle.nativeElement.querySelector('.circle-'+i);
      const radius = circle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      circle.style.strokeDasharray = circumference;
      circle.style.strokeDashoffset = circumference;
    }
    this.calculateCircle(this.percent);  
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.lvlCircle){
      this.calculateCircle(this.percent);  
    }
  }

  setProgress(circle: SVGCircleElement, percent: number, circumference: number) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset.toString();
  }

  createCircleElement(klass: string, index: number, color: string = undefined){
    const circle = this.renderer.createElement('circle', "http://www.w3.org/2000/svg"); 
    circle.setAttribute("stroke", color ? color: this.colors[index]);
    circle.setAttribute("stroke-width", this.stroke ? this.stroke : "4");
    circle.setAttribute("fill","transparent");
    circle.setAttribute("r", (45 - (index*10)).toString());
    circle.setAttribute("cx",this._cx);
    circle.setAttribute("cy",this._cy);
    circle.setAttribute("class", klass);
    circle.style.transform = "rotate(-90deg)"
    circle.style.transformOrigin = "50% 50%"
    circle.style.transition = ".1s ease-in-out"
    return circle;
  }

  calculateCircle(percent: number){
    let total = (percent * (100 * this.circles))/100;
    for( let i = 0; i < this.circles; i++ ){
      const circle = <SVGCircleElement> this.lvlCircle.nativeElement.querySelector('.circle-'+i);    
      const radius = circle.r.baseVal.value;
      const circumference = radius * 2 * Math.PI;
      if(total<=0){
        this.setProgress(circle, 0, circumference); 
        continue;
      }
      total = total - 100;
      if(total>0){
        this.setProgress(circle, 100, circumference); 
      }else{
        this.setProgress(circle, total+100, circumference); 
      }
    }
  }

}
