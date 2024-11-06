import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { LoginResponse } from '../model/login-response';
import { LoginRequest } from '../model/login-request';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient)
  baseUrl = environment.apiUrl
 // Signal para mantener el estado del usuario actual
 currentUser = signal<LoginResponse | null>(null);

 constructor() {
   // Intentar recuperar usuario del localStorage al iniciar
   const storedUser = localStorage.getItem('user');
   if (storedUser) {
     this.currentUser.set(JSON.parse(storedUser));
   }
 }

 login(credentials: LoginRequest) {
  return this.http
    .post<LoginResponse>(`http://localhost:8080/api/user/login`, credentials)
    .pipe(
      tap((response) => {
        // Guarda el usuario en una señal y en localStorage
        this.currentUser.set(response);
        localStorage.setItem('user', JSON.stringify(response));
      })
    );
}
}

