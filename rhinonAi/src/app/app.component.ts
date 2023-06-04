import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rhinonAi';
  @ViewChild('chatArea', { static: true }) chatArea!: ElementRef<HTMLDivElement>;
  messageText: string = '';
  messages: string[] = [];

  submitMessage() {
    if (this.messageText.trim() !== '') {
      this.messages.push(this.messageText);
      this.messageText = '';

      // Scroll to the bottom of the chat area
      setTimeout(() => {
        this.chatArea.nativeElement.scrollTop = this.chatArea.nativeElement.scrollHeight;
      });
    }
  }
}
