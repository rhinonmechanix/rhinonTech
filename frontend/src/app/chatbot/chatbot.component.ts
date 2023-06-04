import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatbotService } from './chatbot.service';

declare var webkitSpeechRecognition: any;

interface ChatMessage {
  messages: {
    role: string;
    content: string;
  }[];
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  
  // messages: { role: string, content: string }[] = [];

  recognition: any;
  myVoice: any = '';
  message: any = '';
  returnMessage: any;
  public sendChatMessage: ChatMessage = { messages: [] };
  micTitle: string = 'Click To Start';

  ngOnInit(): void {
    // this.voices()
    this.setupRecognition();
    // this.startListeningIfJarvisSpoken();
    window.speechSynthesis.onvoiceschanged = () => {
      this.speakWithVoices();
    };
  }

  public title: string;
  @ViewChild('searchKey') hiddenSearchHandler: any;

  private isListening: boolean;

  constructor(
    private chatGpt: ChatbotService,
    ) {
    this.title = 'Voice Search Demo';
    this.isListening = false;
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = false;
    this.recognition.interimresults = false;
    this.recognition.lang = 'en-US';
    this.setupRecognition();
  }

  private setupRecognition(): void {
    this.recognition.onresult = (e: any) => {
      const voiceHandler = this.hiddenSearchHandler.nativeElement;
      voiceHandler.value = e.results[0][0].transcript;
      console.log('Voice input:', voiceHandler.value);
      this.myVoice = voiceHandler.value;
      // Perform any additional actions with the voice input
      // this.stopListening();
      this.sendVoice()
    };

    this.recognition.onerror = (e: any) => {
      console.log('Error:', e);
      this.stopListening();
    };
  }

  public voiceSearch(): void {

    if (this.isListening) {
      this.stopListening();
    } else {
      this.startListening();
    }
  }

  startListening(): void {
    this.recognition.start();
    this.isListening = true;
    console.log('Listening...');
    this.micTitle = "You can talk now"
  }

  stopListening(): void {
    this.recognition.stop();
    this.isListening = false;
    this.micTitle = "Click To Start"
    console.log('Stopped listening....');
  }

  sendMessage() {
    // Add user's message to messages array for next chat session
    
    if (this.message != ''){
      this.sendChatMessage.messages.push({
        role: "user",
        content: this.message
      });
    }
    console.log(this.sendChatMessage);
    this.chatGpt.sendMessage(this.sendChatMessage).subscribe((result) => {
      console.log("result ==", result.response.content);
      this.returnMessage = result.response.content;
      // console.log("Length of data - ",this.returnMessage.length);
      
      // this.textToSpeech(this.returnMessage);

      const response = result.response.content; // Replace with your actual response

      this.sendChatMessage.messages.push({
        role: "assistant",
        content: response
      });
      // Clear input field
      // this.sendChatMessage.messages[0].content = "";
    });
    this.message = '';
  }

  sendVoice() {
    // Add user's message to messages array for next chat session
    
    if(this.myVoice != ''){
      this.sendChatMessage.messages.push({
        role: "user",
        content: this.myVoice
      });
    }

    console.log(this.sendChatMessage);
    this.chatGpt.sendMessage(this.sendChatMessage).subscribe((result) => {
      console.log("result ==", result.response.content);
      this.returnMessage = result.response.content;
      // console.log("Length of data - ",this.returnMessage.length);
      
      this.textToSpeech(this.returnMessage);

      this.sendChatMessage.messages.push({
        role: "assistant",
        content: result.response.content
      });
      // Clear input field
      // this.sendChatMessage.messages[0].content = "";
    });
    this.myVoice = '';
  }

  textToSpeech(text: any) {
    let utterance = new SpeechSynthesisUtterance(text);
    let synth = speechSynthesis;
  
    for (let voice of synth.getVoices()) {
      if (voice.name === 'Microsoft Zira - English (United States)') {
        utterance.voice = voice;
        break;
      }
    }
    speechSynthesis.speak(utterance);
    this.recognition.stop();
  
    // utterance.onend = () => {
    //   this.recognition.stop();
    // };
  }
  
  // stopSpeech() {
  //   if (this.utterance) {
  //     speechSynthesis.cancel();
  //   }
  // }
  // voices(){
  //   let synth = speechSynthesis
  //   for(let voice of synth.getVoices()){
  //     console.log(voice);
  //   }
  // }

  speakWithVoices() {
    let synth = window.speechSynthesis;
    let voices = synth.getVoices();
    let englishVoices = voices.filter(voice => voice.lang.startsWith('en'));
    let totalVoices = englishVoices.length;
    let currentVoiceIndex = 0;

    function speakNextVoice() {
      if (currentVoiceIndex < totalVoices) {
        let utterance = new SpeechSynthesisUtterance("Hey! How are you?");
        utterance.voice = englishVoices[currentVoiceIndex];
        console.log("the voice is ==", voices[currentVoiceIndex]);
        utterance.onend = speakNextVoice;
        synth.speak(utterance);
        currentVoiceIndex++;
      }
    }

    speakNextVoice();
  }
}
