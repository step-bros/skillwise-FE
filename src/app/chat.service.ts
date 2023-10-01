import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from './environment';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http : HttpClient) { }

  askChat$(input: string) {
    let options = { params: new HttpParams().set('message', input) };
    return this.http.get(API_PATH + 'ai/hello', options);
  }
}
