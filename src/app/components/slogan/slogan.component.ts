import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.css']
})
export class SloganComponent implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

 @ViewChild('text') text: ElementRef;

  ngOnInit() {
  	  let options = {
          stringsElement: '#typed-strings',
          typeSpeed: 70,
          backSpeed: 20,
          showCursor: false, // ne pas enlever ou commenter sinon le curseur apparaitra par défaut
          loop:true
        }

      let typed = new Typed(".phrase", options);

  	  window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 2150) {
        this.renderer.setStyle(this.text.nativeElement, 'opacity', '1');
        this.renderer.setStyle(this.text.nativeElement, 'transition', 'opacity 1s');
        } else {
        this.renderer.removeStyle(this.text.nativeElement, 'opacity');
      }
  	}, true);
  }

}
