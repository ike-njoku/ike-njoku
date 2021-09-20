import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailFormat, EmailService } from './email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private emailService: EmailService
  ) { }

  contactForm: FormGroup = this.formBuilder.group({
    name: [
      null, [
        Validators.required
      ]
    ],
    email: [
      null, [
        Validators.required,
        Validators.email
      ]
    ],
    subject: [
      null, [
        Validators.required
      ]
    ],
    message: [
      null, [
        Validators.required
      ]
    ]
  });

  displayMailBox: boolean = true;

  sendEmail() {
    const email: EmailFormat = this.contactForm.value;
    this.emailService.sendEmail(email)
      .subscribe(
        (response: any) => {
          console.log(response)
        },
        (error: any) => console.log(error)
      )
  }

  showNailBox(){
    if(this.displayMailBox == true)this.displayMailBox = false;
    else this.displayMailBox = false;
  }

  ngOnInit(): void {

  }

}
