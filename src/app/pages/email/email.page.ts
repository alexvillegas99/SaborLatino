import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_uijxd5b', 'template_0j5u4a6', e.target as HTMLFormElement, 'user_Bv8vz7bgEDXoy7Yp4KXtY')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
  
}
