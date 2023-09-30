import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Profile{
  streak: number;
  coins: number;
  name: string;
}

const DEFAULT_STREAK = 5;
const DEFAULT_COINS = 60;
const DEFAULT_NAME = 'Darrick';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profileSubject = new BehaviorSubject<Profile>({
    streak: DEFAULT_STREAK,
    coins: DEFAULT_COINS,
    name: DEFAULT_NAME
  });

  profile$: Observable<Profile> = this.profileSubject.asObservable();

  constructor() { }

  getProfile(): Observable<Profile> {
    return this.profile$;
  }
}
