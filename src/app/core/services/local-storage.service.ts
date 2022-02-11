import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveCredentials(user_id, first_name, last_name, mobile, email, token, role, profile_pic) {
    localStorage.setItem("user_id", user_id);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("first_name", first_name);
    localStorage.setItem("last_name", last_name);
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("profile_pic", profile_pic);
  }
  
  getCredentials() {
    let credentials = {
      mobile: localStorage.getItem("mobile"),
      first_name: localStorage.getItem("first_name"),
      last_name: localStorage.getItem("last_name"),
      email: localStorage.getItem("email"),
      token: localStorage.getItem("token"),
      role: localStorage.getItem("role"),
      profile_pic: localStorage.getItem("profile_pic"),
    }

    return credentials;
  }

  getUserId() {
    return localStorage.getItem("user_id")
  }

  getUserRole() {
    return localStorage.getItem("role")
  }

  setLocation(latitude, longitude) {
    localStorage.setItem('latitude', latitude)
    localStorage.setItem('longitude', longitude)
  }

  getLocation() {
    return {
      latitude: localStorage.getItem('latitude'),
      longitude: localStorage.getItem('longitude')
    }
  }

  clearLocalStorage() {
    localStorage.clear()
  }
}
