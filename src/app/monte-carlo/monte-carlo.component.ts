import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-monte-carlo',
  templateUrl: './monte-carlo.component.html',
  styleUrls: ['./monte-carlo.component.scss']
})
export class MonteCarloComponent implements AfterViewInit {

  @ViewChild("canvas") canvas: ElementRef

  total = 200
  offset = 15
  insideNums = 0
  inside = ''
  outside = ''
  pi = ''

  constructor() { 
  }
  
  ngAfterViewInit(): void { 
    this.draw()
  }

  public draw () {
    this.insideNums = 0
    if (this.canvas && this.canvas.nativeElement.getContext) {
        let ctx = this.canvas.nativeElement.getContext("2d");
    
        ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    
        const point = (x, y, canvas, color) => {
            ctx.strokeStyle = color;
            canvas.beginPath();
            canvas.arc(x, y, 1, 0, 2 * Math.PI, true);
            canvas.stroke();
        }

        const normalize = ( p, m ) => {
            return {
                x : p.x / m.x * this.canvas.nativeElement.width,
                y : p.y / m.y * this.canvas.nativeElement.height,
            }
        }
    
        let centerX = this.canvas.nativeElement.width / 2;
        let centerY = this.canvas.nativeElement.height / 2;
    
        let outerCircle = new Path2D();
    
        outerCircle.arc(centerX, centerY, Math.min(centerX, centerY), 0, 2 * Math.PI);
    
        ctx.strokeStyle = "#3794e6";
        ctx.lineWidth = 1;
        ctx.stroke(outerCircle);
    
        ctx.strokeStyle = "#5d37e6"
        ctx.beginPath();
        ctx.rect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height)
        ctx.stroke();
    
        for ( let i = 0; i < this.total; i++ ) {
            let x = Math.random() * [ -1, 1 ][ Math.random() * 2 | 0];  
            let y = Math.random() * [ -1, 1 ][ Math.random() * 2 | 0];  
            let d = Math.sqrt( Math.pow(( x ), 2) + Math.pow(( y ), 2) )
            if ( d <= 1 ){
              this.insideNums = this.insideNums + 1
            } 
            let np = normalize ({ x, y }, { x : 2, y : 2 })
            if ( d <= 1 )
                point(centerX + np.x + 1, centerY + np.y, ctx, "#e660c9")
            else
                point(centerX + np.x + 1, centerY + np.y, ctx, "#32a852")
        }

        this.inside = "Inside: " + this.insideNums.toString()
        this.outside = "Outside: " + ( this.total - this.insideNums ).toString()
        this.pi = "Pi Aprox.: " + (4 * this.insideNums / this.total ).toString()
    
    }

  }

}
