import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

export interface Profile {
  streak: number;
  coins: number;
  name: string;
}

const DEFAULT_STREAK = 5;
const DEFAULT_COINS = 60;
const DEFAULT_NAME = 'Darrick';


const API_PATH = '/api/student/';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile = {
    streak: DEFAULT_STREAK,
    coins: DEFAULT_COINS,
    name: DEFAULT_NAME
  };
  private profileSubject = new BehaviorSubject<Profile>(this.profile);

  profile$: Observable<Profile> = this.profileSubject.asObservable();

  constructor(private http: HttpClient) { }

  getProfile$(): Observable<Profile> {
    return this.profile$;
  }

  getProgress$(courseName : string) {
    const options = { params: new HttpParams().set('courseName', courseName) };
    return this.http.get(API_PATH + this.profile.name + "/progress", options);
  }

  getCourses() {
    return this.http.get(API_PATH + this.profile.name + "/courses");
  }
}
