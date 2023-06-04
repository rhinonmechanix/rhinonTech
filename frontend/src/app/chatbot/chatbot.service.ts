import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private uploadUrl: string = "http://localhost:3500/chat";

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(sendChatMessage: any): Observable<any> {
    return this.http.post<any>(this.uploadUrl, sendChatMessage);
  }
}