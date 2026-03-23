import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-apply-leave',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
  
})
export class ApplyLeaveComponent {
  
  leave: any = {
    studentId: 0,
    date: '',
    reason: ''            
  };
  message='';
  

  constructor(private leaveService: LeaveService,
              private authService: AuthService,
              private fb: FormBuilder,
              private router: Router
  ){}

  ngOnInit(): void {
    const storedId = localStorage.getItem('studentId');
    if(storedId){
      this.leave.studentId = +storedId;
      console.log('StudentID Found', this.leave.studentId);
    }
  }

  applyLeave(){
    console.log("Submitting Leave:", this.leave);
   if(!this.leave.date || !this.leave.reason){
    this.message = 'Please fill all fields';
    return;
      }

    this.leaveService.applyLeave(this.leave).subscribe({
           next: () => {this.message = "Leave applied successfully";
           this.leave.date = '';
           this.leave.reason = '';
           this.router.navigate(['/student-dashboard']);
           },
           error: (err) => {this.message = "Error applying Leave";
           }
           
    });
  }
  }

