import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { StorageService, AuthService } from 'src/app/services';
import { User } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Constants } from '../..';

@Component({
  selector: 'tdl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy  {
  private readonly durationInSeconds: number = 5;

  public loginForm!: FormGroup;
  public hidePswrd: boolean;

  private subs: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) {
    this.hidePswrd = true;

    this.initForm();
  }

  public  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  public onLogin(): void {
    const subId: Subscription = this.authService
      .login(
        this.loginForm.getRawValue().email,
        this.loginForm.getRawValue().password
        )
      .subscribe(
        (user: User) => {
          this.storageService.setUser(user);
          this.router.navigate([Constants.ROUTERS.EMPTY]);
        },
        (error: Record<string, string>) => {
          this.showError(error.msg);
          this.loginForm.reset();
        },
      );

      this.subs.add(subId);
  }

  public getEmailErrors(type: string): boolean {
    if (!this.loginForm.get('email').errors) {
      return false;
    }
    return this.loginForm.get('email').errors.hasOwnProperty(type);
  }

  private initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  private showError(msg: string): void {
    this.snackBar.open(msg, 'Error !', {
      duration: 3000,
    })
  }

}
