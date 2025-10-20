import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpRequestService {
  private dbUrl =
    'https://recipe-db-f09e1-default-rtdb.firebaseio.com/users.json';
  constructor(private http: HttpClient) {}

  postUserData(data: any) {
    return this.http.post(this.dbUrl, data);
  }

  deleteUser(id: any) {
    const url = `https://recipe-db-f09e1-default-rtdb.firebaseio.com/users/${id}.json`;
    return this.http.delete(url);
  }

  getUserData() {
    return this.http.get<{ [key: string]: any }>(this.dbUrl).pipe(
      map((data) =>
        Object.entries(data).map(([id, user]) => ({
          id,
          ...user,
        }))
      )
    );
  }

  putUserData(id: string, data: any) {
    const url = `https://recipe-db-f09e1-default-rtdb.firebaseio.com/users/${id}.json`;
    return this.http.put(url, data);
  }
}
