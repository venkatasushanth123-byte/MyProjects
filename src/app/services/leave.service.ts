import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  private baseurl = 'http://localhost:8080/api/leaves';
  constructor(private http: HttpClient) { }

  applyLeave(leave: any):Observable<any> 
  { 
    return this.http.post('http://localhost:8080/api/leaves/apply', leave); 
  }

  getStudentLeave(studentId: number):Observable<any>
  {
    return this.http.get('http://localhost:8080/api/leaves/${studentId}');
  }

  getAllLeaves():Observable<any>
  {
    return this.http.get('http://localhost:8080/api/leaves/all');
  }

  approveLeave(leaveId: number):Observable<any>
  {
    return this.http.put('http://localhost:8080/api/leaves/approve/${leaveId}',{});
  }

  rejectLeave(leaveId: number):Observable<any>
  {
    return this.http.put('http://localhost:8080/api/leaves/reject/${leaveId}',{});
  }
}
