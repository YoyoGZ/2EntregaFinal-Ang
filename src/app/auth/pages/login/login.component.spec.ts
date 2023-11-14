import { TestBed } from "@angular/core/testing"
import { LoginComponent } from "./login.component"
import { HttpClientTestingModule } from "@angular/common/http/testing"
import { SharedModule } from "src/app/shared/shared.module";

describe('loginComponent' ,() => {

    let loginComponent : LoginComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [HttpClientTestingModule, SharedModule]
        });

        loginComponent = TestBed.createComponent(LoginComponent).componentInstance;
    });

    it('Should create Login Component', ()=> {
       
        expect(loginComponent).toBeTruthy();
    });

    it('Should mark all fields as touched if this one is invalid'), () => {
        loginComponent.login();

        expect(loginComponent.emailControl.touched).toBeTrue();
        expect(loginComponent.passwordControl.touched).toBeTrue()
    }
})