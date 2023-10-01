import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_PATH } from './environment';
import { share } from 'rxjs/operators';

export interface Profile {
  streak: number;
  coins: number;
  name: string;
}

const DEFAULT_STREAK = 0;
const DEFAULT_COINS = 0;
const DEFAULT_NAME = 'Darrick';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profile = {
    streak: DEFAULT_STREAK,
    coins: DEFAULT_COINS,
    name: DEFAULT_NAME
  };

  private profileSubject$ = new BehaviorSubject<Profile>(this.profile);
  constructor(private http: HttpClient) { }

  getProfile$(): Observable<Profile> {
    this.http.get(API_PATH + 'student/' + this.profile.name).subscribe((profile: any) => {
      console.log('ProfileService.getProfile$():', profile);
      this.profileSubject$.next({
        streak: profile.streak,
        coins: profile.gold,
        name: profile.name
      });
    });
    return this.profileSubject$;
  }

  getProgress$(courseName: string) {
    const options = { params: new HttpParams().set('courseName', courseName) };
    return this.http.get(API_PATH + 'student/' + this.profile.name + "/progress", options);
  }

  getCourses$() {
    return this.http.get(API_PATH + 'student/' + this.profile.name + "/courses");
  }

  refreshProfile() {
    return (profile: any) => {
      this.profileSubject$.next({
        streak: profile.streak,
        coins: profile.gold,
        name: profile.name
      })
    };
  }

  enroll$(courseName: string) {
    const options = { params: new HttpParams().set('courseName', courseName) };
    let result$ = this.http.post(API_PATH + 'student/' + this.profile.name + "/enroll", null, options)
      .pipe(share());
    result$.subscribe(this.refreshProfile());
    return result$;
  }

  claimReward$(rewardName: string) {
    const options = { params: new HttpParams().set('rewardName', rewardName) };
    let result$ = this.http.post(API_PATH + 'student/' + this.profile.name + "/claim", null, options)
    result$.subscribe(this.refreshProfile());
    return result$;
  }
}
