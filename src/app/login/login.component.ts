import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginServiceService } from '../login-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user= new FormControl();
  password= new FormControl();
  udata :any;
  puser :any;
  constructor(private modalService: NgbModal,private loginService : LoginServiceService) { }


  ngOnInit(): void {
    this.showData();
  }
  open(content:any) {
    this.modalService.open(content); 
  }
  
  showData()
  {
    this.loginService.getUsers()
    .subscribe(data=> {this.udata = data;
      console.log(this.udata);
    });
    
  }

  postData()
  {
    
    this.puser={user:this.user.value,password:this.password.value};
    this.loginService.createUser(this.puser)
    .subscribe();
    this.showData();
    this.modalService.dismissAll();
    
  }
  }

