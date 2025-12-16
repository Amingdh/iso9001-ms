import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NonConformity {
  id?: number;
  title: string;
  description?: string;
  severity?: string;
  status?: string;
  assignedTo?: string;
  dueDate?: string;
  actionId?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ActionItem {
  _id?: string;
  nonConformityId: string;
  title: string;
  description?: string;
  status?: string;
  owner?: string;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable()
export class ApiService {
  private base = '/';

  constructor(private http: HttpClient) {}

  listNonConformities(): Observable<NonConformity[]> {
    return this.http.get<NonConformity[]>(`${this.base}non-conformities`);
  }

  createNonConformity(payload: NonConformity): Observable<NonConformity> {
    return this.http.post<NonConformity>(`${this.base}non-conformities`, payload);
  }

  listActions(): Observable<ActionItem[]> {
    return this.http.get<ActionItem[]>(`${this.base}actions`);
  }

  createAction(payload: ActionItem): Observable<ActionItem> {
    return this.http.post<ActionItem>(`${this.base}actions`, payload);
  }
}

