import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: NgbDateStruct | undefined;
  constructor(private modalService : NgbModal) { }

  ngOnInit(): void {
  }
  open(content:any) {
    this.modalService.open(content); 
  }
 
}
