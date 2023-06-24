import { Component } from '@angular/core'; 
@Component({ 
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
}) 
export class FeedbackComponent {
  feedbackData = {
    name: '', 
    email: '', 
    feedback: ''
  };
   submitFeedback() { 
    console.log(this.feedbackData); 
  }
  public showMyMessage = false
  showMessageSoon() {
    setTimeout(() => {
      this.showMyMessage = true
    })
  }
}