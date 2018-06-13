import { Component, OnInit, OnDestroy, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { MainService } from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

	@ViewChild('title') title;

	constructor(private elRef: ElementRef, private renderer: Renderer2, public mainService: MainService) { }

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);

        window.addEventListener("DOMContentLoaded", () => {
        if (document.documentElement.clientWidth > 845) {
            window.location.assign("https://www.breyn.net");
          } 
        });

        window.addEventListener("resize", () => {
        if (document.documentElement.clientWidth > 845) {
            window.location.assign("https://www.breyn.net");
          } 
        });

    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }
    
    scroll = (): void => { 
    	/*console.log(window.pageYOffset);*/
    	if (window.pageYOffset >= 100 && window.pageYOffset < 570) {
    		this.renderer.setStyle(this.title.nativeElement, 'opacity', 1);
    		this.renderer.setStyle(this.title.nativeElement, 'transition', 'opacity 1.5s');
    	} else {
            this.renderer.removeStyle(this.title.nativeElement, 'opacity');
        }
    }

}
