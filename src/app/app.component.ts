import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ContentService } from './content.service';
import { DialogService } from './dialog/dialog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('400ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('400ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    )
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'leonamtv';

  projs = [];
  loadingProjs: boolean = false;

  conteudo = {};
  loadingConteudo: boolean = false;
  
  tools = {};
  loadingTools: boolean = false;

  visible : boolean;

  constructor(
    @Inject(DOCUMENT) document,
    private contentService: ContentService,
    private dialogService: DialogService
  ) { 
    this.getData()
  }

  onClick() {
    this.dialogService.open((data) => {
      console.log(data)
    })
  }
  
  ngOnInit(): void {
    console.log('Campo de vetores do background gerado pela função: \n   f(x,y) = (x + y)î + (y)ĵ');
  }
  
  getData () {
    this.loadingConteudo = true
    this.contentService
      .getContent()
      .subscribe ( 
        data => this.conteudo = data, 
        console.error, 
        () => this.loadingConteudo = false
      )
    this.loadingProjs = true
    this.contentService
      .getProjs()
      .subscribe ( 
        data => this.projs = data, 
        console.error, 
        () => this.loadingProjs = false
      )
    this.loadingTools = true
    this.contentService
      .getTools()
      .subscribe ( 
        data => this.tools = data, 
        console.error, 
        () => this.loadingTools = false
      )
  }

  goToLink ( link ) {
    window.open(link, "_blank");
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  gotToTop () {
    this.scrollToElement(window.document.getElementById('home'));
  }

  @HostListener('window:scroll', ['$event'])
  onScroll ( event ) {
    let homeTop       = window.document.getElementById('home').getBoundingClientRect().top;
    let screenHeight  = window.innerHeight;
    this.visible      = (( Math.abs(homeTop) + 300 )< screenHeight ) ? false : true;
  }


}
