import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { ApplyLeaveComponent } from './components/apply-leave/apply-leave.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'apply-leave', component: ApplyLeaveComponent},
    {path: 'student-dashboard', component: StudentDashboardComponent},
    {path: 'admin-dashboard', component: AdminDashboardComponent},
    { path:'**',redirectTo: ''}
];

