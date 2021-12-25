import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveCredentials(user_id, first_name, last_name, mobile, email, token, profile_pic) {
    localStorage.setItem("user_id", user_id);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("first_name", first_name);
    localStorage.setItem("last_name", last_name);
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
    localStorage.setItem("profile_pic", profile_pic);
  }

  getUserId() {
    return localStorage.getItem("user_id")
  }

  clearLocalStorage() {
    localStorage.clear()
  }
}
