import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { AuthService } from "./auth.service"
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { MockProvider } from "ng-mocks";
import { User } from "src/app/dashboard/pages/users/models";
import { environment } from "src/environment/environment.local";




fdescribe('AuthService', ()=>{
    let authService: AuthService;
    let httpController: HttpTestingController; 

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [MockProvider(Router)],
        });

        authService = TestBed.inject(AuthService);
        httpController = TestBed.inject(HttpTestingController);
    });

    it('AuthService should be defined', () => {
        expect(authService).toBeTruthy()
    });

    it(' Debe tener un Usuario autenticado al hacer login' , () => {
        let USER_MOCK: User = {
            id: 50,
            name: 'Roger',
            lastName: 'Freddy',
            email: 'testmail@email.com',
            password: '456852',
            token: 'pakmjimnjlsdhlajilnlla557595214',
            role: 'Admin'
        };

        authService.login({
            email: USER_MOCK.email,
            password: USER_MOCK.password
        });

        httpController
        .expectOne({method: 'GET', url: `${environment.baseUrl}/users?email=${USER_MOCK.email}&password=${USER_MOCK.password}`})
        .flush([USER_MOCK]);

        authService.authUser$.subscribe({
            next: (authUser) => {
                expect(authUser).toBeTruthy(),
                expect(authUser).toEqual(USER_MOCK)
            },
        });
    });
});

