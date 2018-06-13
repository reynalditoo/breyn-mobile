import { Component, OnInit, OnDestroy, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

	@ViewChild('menu') menu: ElementRef;

	clk: boolean = false;

	toggleOpacity() {
		this.clk = !this.clk;
		if (this.clk === true) {
			this.renderer.setStyle(this.menu.nativeElement, 'opacity', 1);
		} else {
			this.renderer.setStyle(this.menu.nativeElement, 'opacity', .7);
		}
	}

	constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true);
    }

    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }
    
    scroll = (): void => { 
    	/*console.log(window.pageYOffset);*/
    	if (window.pageYOffset >= 570 && !this.clk) {
    		this.renderer.setStyle(this.menu.nativeElement, 'opacity', .7);
    		this.renderer.setStyle(this.menu.nativeElement, 'transition', 'opacity 1s');
    	} else if(window.pageYOffset >= 570 && this.clk) {
    		this.renderer.setStyle(this.menu.nativeElement, 'opacity', 1);
    	} else {
            this.renderer.removeStyle(this.menu.nativeElement, 'opacity');
        }
    }

}
