import { Component, OnDestroy } from '@angular/core';
import { LoginService } from './login.service';
import { UserProfileService } from './user-profile.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
    moduleId: module.id,
    templateUrl:'login.component.html',
    providers: [LoginService]
})
export class LoginComponent {
    private loginSub: Subscription;
    constructor(private loginService: LoginService,
     private userProfileService: UserProfileService,
     private route:ActivatedRoute,
     private router:Router) {

    }
    public get isLoggedIn(): boolean {
        return this.userProfileService.isLoggedIn;
    }
    login() {
        this.loginSub = this.loginService
            .login()
            .mergeMap((loginResult:any) => this.route.queryParams)
            .map((qp:any) => qp['redirectTo'])
            .subscribe((redirectTo:any) => {
                console.log(`Successfully logged in`);
                if (this.userProfileService.isLoggedIn) {
                    let url = redirectTo ? [redirectTo] : ['/'];
                    this.router.navigate(url);
                }
            });
    }
    logout() {
        this.loginService.logout();
        console.log(`Successfully logged out`);
    }
}
