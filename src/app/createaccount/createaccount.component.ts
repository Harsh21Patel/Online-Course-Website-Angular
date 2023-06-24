import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit{
  gender = 'female';
  submitted = false;
  user = {
    sname: '',
    email: '',
    gender: '',
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