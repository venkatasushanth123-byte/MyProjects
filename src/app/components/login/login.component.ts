import { Component } from '@angular/core';
import { Router, RouterModule} from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent {
  credentials = { username:'', password:''};

  constructor(private authService: AuthService, private router: Router){}

  login() {
    this.authService.login(this.credentials).subscribe(
      (res: any) => {
     this.authService.setUser(res);
     if(res.role === 'STUDENT'){
      localStorage.setItem('studentId', res.id);
       this.router.navigate(['/student-dashboard']);}
     else if(res.role === 'ADMIN')
      this.router.navigate(['/admin-dashboard']);
      },
      err => alert('Invalid Credentials')
    );
  }
}
