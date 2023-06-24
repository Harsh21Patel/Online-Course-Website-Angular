import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  submitted = false;
  user = {
    email: '',
    pass:'',
  }

  ngOnInit(): void {
    
  }
  onFormSubmit(f:NgForm) {
   console.log(f);
  }
  public showMyMessage = false

showMessageSoon() {
  setTimeout(() => {
    this.showMyMessage = true
  })
}
}