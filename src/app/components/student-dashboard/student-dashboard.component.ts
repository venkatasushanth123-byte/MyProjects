import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LeaveService } from '../../services/leave.service';
import { AuthService } from '../../services/auth.service';

interface Leave {
  date: string;
  reason: string;
  status: string;
}

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  leaves: Leave[] = [];
  studentId: number | null = null;
  

  constructor(private leaveService: LeaveService, 
              private authService: AuthService,
              private router: Router
  ){}
  ngOnInit(){
    this.studentId = this.authService.getStudentId();
    
      this.loadleaves();
    
    //throw new Error('Method not implemented.');
  }
 loadleaves(){

  if(this.studentId === null) return;
  this.leaveService.getStudentLeave(this.studentId!).subscribe({
     next: (res: Leave[]) => this.leaves = res,
     error: () => console.error('Error Fetching Leaves')
  });
  }


}
