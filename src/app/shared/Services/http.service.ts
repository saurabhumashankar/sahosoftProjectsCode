import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _httpClient: HttpClient) { }

  get(url:string): Observable<any> {
    return this._httpClient.get(url);
   }
  post(url: string,  model : any) : Observable<any> {
    const body = JSON.stringify(model);
      let httpHeaders= new HttpHeaders()
     .set('Content-Type', 'application/json')

      return this._httpClient.post(url, body, {
      headers: httpHeaders
    });  
  }
  postImage(url: string, model: any) : Observable<any> {
    return this._httpClient.post(url, model);
  }

 put(url: string, id:number, model: any) : Observable<any> {
  const body = JSON.stringify(model);

    let httpHeaders= new HttpHeaders()
   .set('Content-Type', 'application/json')

    return this._httpClient.post(url+id, body, {
    headers: httpHeaders
  });  
}
delete(url: string, id: number) : Observable<any> {
  return this._httpClient.delete(url+id);
}


}
