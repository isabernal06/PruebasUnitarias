import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private path = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.path);
  }

  getUsersWithError() {
    return this.http.get(this.path + 'withError');
  }

  getUserById(id: number) {
    return this.http.get(`${this.path}/${id}`);
  }

  createUser(newUser: any) {
    const data = JSON.stringify(newUser);
    return this.http.post(`${this.path}`, newUser);
  }

  updateUser(user: any, id: number) {
    const data = JSON.stringify(user);
    return this.http.put(`${this.path}/${id}`, data);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.path}/${id}`);
  }
}
