import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
      leaves: any[] = [];

      constructor(private leaveService: LeaveService){}
  ngOnInit(): void {
       this.loadLeaves();
    //throw new Error('Method not implemented.');
  }
  loadLeaves() {

    this.leaveService.getAllLeaves().subscribe(res => this.leaves = res)
    //throw new Error('Method not implemented.');
  }

  approveLeave(leaveId: number){
    this.leaveService.approveLeave(leaveId).subscribe(() => this.loadLeaves());
  }

  rejectLeave(leaveId: number){
    this.leaveService.rejectLeave(leaveId).subscribe(() => this.loadLeaves());
  }
}
