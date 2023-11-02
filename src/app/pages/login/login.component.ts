import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  loginWithGoogle() {
    this.authService.signinWithGoogle().then((res: any) => {
      this.router.navigateByUrl('home');

    }).catch((error: any) => {
      console.log();

    })

  }

  loginWithEmailAndPassword(){
    const userDatails = Object.assign(this.loginForm.value, {email:this.loginForm.value.username});

    this.authService.signWithEmailAndPassword(userDatails).then((res: any) => {
      this.router.navigateByUrl('home');

    }).catch((error: any) => {
      console.log();

    })
  }

  
}
