import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
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

  projs = [
    {
      'titulo' : 'FGA N-Rainhas',
      'desc'   : 'Implementação de algoritmo genético para resolver o problema das N-rainhas.',
      'link'   : 'https://github.com/leonamtv/FGA-N-Rainhas',
      'tags'   : [ 'python', 'IA', 'AG' ]
    },
    {
      'titulo' : 'Frame Analyser',
      'desc'   : 'Um script em python3 para analisar um vídeo ou um filme e gerar um html com suas cores predominantes.',
      'link'   : 'https://github.com/leonamtv/frame-analyser',
      'tags'   : [ 'python' ]
    },
    {
      'titulo' : 'Nerdcast Downloader',
      'desc'   : 'Pequeno webcrawler que faz a busca do último nerdcast e faz o download.',
      'link'   : 'https://github.com/leonamtv/nerdcast-downloader',
      'tags'   : [ 'python' ]
    },
    {
      'titulo' : 'Lyrics Analyser',
      'desc'   : 'Pequeno webcrawler para fazer o download de letras de artistas e verificar a frequência de palavras',
      'link'   : 'https://github.com/leonamtv/lyrics-analyser',
      'tags'   : [ 'python' ]
    },
    {
      'titulo' : 'Criador de projetos',
      'desc'   : 'Software para automatizar a criação de projetos.',
      'link'   : 'https://github.com/leonamtv/create-base-project',
      'tags'   : [ 'python' ]
    },
    {
      'titulo' : 'Cubo de led 8x8x8',
      'desc'   : 'Frontend do projeto apresentado pelo meu grupo na META do CEFET-MG 2019.',
      'link'   : 'https://github.com/leonamtv/Cubo-de-led-8x8x8',
      'tags'   : [ 'angular', 'typescript' ]
    },
    {
      'titulo' : 'Space X',
      'desc'   : 'Aplicativo simples para consumir alguns recursos da api graphql pública da SpaceX.',
      'link'   : 'https://github.com/leonamtv/spacex',
      'tags'   : [ 'flutter', 'dart' ]
    },
    {
      'titulo' : 'Wgmon',
      'desc'   : 'Aplicativo para monitorar peso usando como base de dados uma simples planilha do Google Sheets. Regressão linear é utilizada para fazer predição.',
      'link'   : 'https://github.com/leonamtv/wgmon',
      'tags'   : [ 'flutter', 'dart' ]
    },
    {
      'titulo' : 'Clexer',
      'desc'   : 'Analisador léxico para a linguagem ANSI-C. Trabalho da disciplina de compiladores.',
      'link'   : 'https://github.com/leonamtv/clexer',
      'tags'   : [ 'python' ]
    },
    {
      'titulo' : 'HTMLParser',
      'desc'   : 'Parser de HTML para a disciplina de compiladores.',
      'link'   : 'https://github.com/leonamtv/html-parser',
      'tags'   : [ 'python' ]
    },
  ];

  conteudo = {
    'interesses' : "Meus interesses são voltados para as áreas de desenvolvimento web, desenvolvimento mobile, análise de dados e machine learning.",
    'formacao' : [
      "Tenho curso de aprendizagem e manutenção em redes de microcomputadores no SENAI",
      "Sou técnico em informática pelo CEFET-MG campus Timóteo",
      "Sou aluno do 8º período de engenharia de computação pelo CEFET-MG campus Timóteo"
    ],
    'habilidades-tec' : {
      'title' : 'Habilidades técnicas',
      'items' : [
        'Node.js',
        'Angular 2',
        'Flutter',
        'Python',
        'C++'
      ]
    },
    'habilidades-pes' : {
      'title' : 'Habilidades pessoais',
      'items' : [
        'Proativo',
        'Trabalho bem em equipe',
        'Toco violão, guitarra, baixo e teclado'
      ]
    },
    'studyingnow' : { 
      'title' : 'Atualmente estou estudando',
      'items' : [
        'Flutter',
        'Tensorflow 2.0',
      ]
    },
    'offtopic' : {
      'title' : 'Off-topic',
      'items' : [
        { 
          'title' : 'Algoritmos favoritos',
          'items' : [
            'Counting sort',
            'Dijkstra'
          ]
        },
        {
          'title' : 'Problema favorito',
          'items' : [
            'Aproximação de pi pelo método de Monte Carlo'
          ]
        },
        {
          'title' : 'Filmes favoritos',
          'items' : [
            'Pulp Fiction',
            'Inglorious Basterds',
            'Arrival',
            'Lord of the rings I, II e III'
          ]
        }
      ]
    }
  };

  visible : boolean;

  constructor(@Inject(DOCUMENT) document) {}
  
  ngOnInit(): void {
    console.log('Campo de vetores do background gerado pela função: \n   f(x,y) = (x + y)î + (y)ĵ');
  }
  
  goToProject ( proj ) {
    window.open(proj.link, "_blank");
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
