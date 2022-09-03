import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
con:any;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  
  }
  open(content:any) {
    this.modalService.open(content);
    console.log(content)
    this.con=content;
    
  }
  changeStyle() {
    alert("ok")
  }
}
