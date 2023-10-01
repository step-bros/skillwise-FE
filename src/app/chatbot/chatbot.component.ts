import { Component } from '@angular/core';
//form
import { FormGroup, FormControl } from '@angular/forms';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: string[] = [];
  inputMessages: string[] = [];

  chatForm = new FormGroup({
    chatInput: new FormControl('')
  });

  constructor(private chatService: ChatService) { }

  waiting = false;

  onSubmit() {
    let input = this.chatForm.value.chatInput;
    if (input === null || input === undefined)
      return;

    this.waiting = true;
    this.chatService.askChat$(input).subscribe((response: any) => {
      this.inputMessages.push(input!);
      this.messages.push(response.completion);
      this.waiting = false;
    });
    this.chatForm.reset();
  }
}
