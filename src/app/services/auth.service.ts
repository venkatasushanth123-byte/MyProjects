import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User{
  id: number;
  username: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private baseurl = 'http://localhost:8080/api/auth';
  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<User>
  {
    return this.http.post<User>('http://localhost:8080/api/auth/login', credentials);
  }

  logout() {
    localStorage.removeItem('user');
  }

  setUser(User: any){
    localStorage.setItem('user', JSON.stringify(User));
  }

  getUser(): any{
    const user =localStorage.getItem('User');
    return user ? JSON.parse(user) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  getUserRole(): string{
    const user = this.getUser();
    return user ? user.role : '';
  }

  getStudentId(): number | null{
    const user = this.getUser();
    return user ? user.id : null;
  }
  
}
