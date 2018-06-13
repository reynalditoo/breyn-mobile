import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

    toggleCaret(e) {
	  	let target = e.target.parentElement.nextElementSibling;
	  	let target2 = e.target.parentElement.parentElement.nextElementSibling;
	  	if (target2.className === "collapse show") {
	  		target.className = "fas fa-caret-right";
	  	} else {
	  		target.className = "fas fa-caret-down";
	  	}
  }

  ngOnInit() {
  }

}
