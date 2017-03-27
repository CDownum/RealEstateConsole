import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {Http, Response, Request, RequestMethod} from '@angular/http';

@Component({
  selector: 'app-agent-login-form',
  templateUrl: './agent-login-form.component.html',
  styleUrls: ['./agent-login-form.component.css']
})
export class AgentLoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;

  }
}
