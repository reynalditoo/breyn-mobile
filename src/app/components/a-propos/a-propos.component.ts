import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent implements OnInit {

  constructor() { }

  

  toggleCaret(e) {
  	let target = e.target.parentElement.nextElementSibling;
  	let target2 = e.target.parentElement.parentElement.nextElementSibling;
  	if (target2.className === 'collapse show') {
  		target.className = "fas fa-caret-right";
  	} else {
  		target.className = "fas fa-caret-down";
  	}
  }

  ngOnInit() {
  	let a: any = document.getElementById("collapseOne").className;
  	console.log(a);
  }

}
