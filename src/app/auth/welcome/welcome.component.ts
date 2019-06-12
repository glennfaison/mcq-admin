import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    const pageTop = document.getElementById('page-top');
    pageTop.classList.add('bg-gradient-primary');
  }
  ngOnDestroy(): void {
    const pageTop = document.getElementById('page-top');
    pageTop.classList.remove('bg-gradient-primary');
  }

}
