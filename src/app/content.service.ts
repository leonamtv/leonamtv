import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private urlProjs: string = 'assets/site_content/projs.json'
  private urlContent: string = 'assets/site_content/content.json'
  private urlTools: string = 'assets/site_content/tools.json'

  constructor(
    private http: HttpClient
  ) { }

  getProjs () : Observable<any> {
    return this.http.get(this.urlProjs)
  }
  
  getContent () : Observable<any> {
    return this.http.get(this.urlContent)
  }

  getTools () : Observable<any> {
    return this.http.get(this.urlTools)
  }

}
