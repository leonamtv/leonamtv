import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'leonamtv';

  projs = [
    {
      'titulo' : 'Frame Analyser',
      'desc'   : 'Um script em python3 para analisar um vídeo ou um filme e gerar um html com suas cores predominantes.',
      'link'   : 'https://github.com/leonamtv/frame-analyser'
    },
    {
      'titulo' : 'Nerdcast Downloader',
      'desc'   : 'Pequeno webcrawler que faz a busca do último nerdcast e faz o download.',
      'link'   : 'https://github.com/leonamtv/nerdcast-downloader'
    },
    {
      'titulo' : 'Lyrics Analyser',
      'desc'   : 'Pequeno webcrawler para fazer o download de letras de artistas e verificar a frequência de palavras',
      'link'   : 'https://github.com/leonamtv/lyrics-analyser'
    },
    {
      'titulo' : 'Criador de projetos',
      'desc'   : 'Software para automatizar a criação de projetos.',
      'link'   : 'https://github.com/leonamtv/create-base-project'
    },
    {
      'titulo' : 'Cubo de led 8x8x8',
      'desc'   : 'Frontend do projeto apresentado pelo meu grupo na META do CEFET-MG 2019.',
      'link'   : 'https://github.com/leonamtv/Cubo-de-led-8x8x8'
    },
    {
      'titulo' : 'Space X',
      'desc'   : 'Aplicativo simples para consumir alguns recursos da api graphql pública da SpaceX.',
      'link'   : 'https://github.com/leonamtv/spacex'
    },
    {
      'titulo' : 'Wgmon',
      'desc'   : 'Aplicativo para monitorar peso usando como base de dados uma simples planilha do Google Sheets. Regressão linear é utilizada para fazer predição.',
      'link'   : 'https://github.com/leonamtv/wgmon'
    },
  ];

  conteudo = {
    'interesses' : "Meus interesses são voltados para as áreas de desenvolvimento web, desenvolvimento mobile, análise de dados e machine learning.",
    'formacao' : [
      "Tenho curso de aprendizagem e manutenção em redes de microcomputadores no SENAI",
      "Sou técnico em informática pelo CEFET-MG campus Timóteo (aguardando colação de grau)",
      "Sou aluno do 7º período de engenharia de computação pelo CEFET-MG campus Timóteo"
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
          'title' : 'Problemas favoritos',
          'items' : [
            'Dado um gerador de números aleatórios uniformemente distribuídos, encontre uma aproximação do valor de pi.'
          ]
        },
        {
          'title' : 'Filmes favoritos',
          'items' : [

          ]
        }
      ]
    }
  };
  
  ngOnInit(): void {
    console.log('Campo de vetores do background gerado pela função: \n   f(x,y) = (x + y)î + (y)ĵ');
  }
  
  goToProject ( proj ) {
    window.open(proj.link, "_blank");
  }

  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

}
