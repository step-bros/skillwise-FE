import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  subscription: any;

  constructor(private profileService: ProfileService) { }
  profile$: Observable<Profile> = this.profileService.getProfile$();
  profile: Profile = {
    name: '',
    streak: 0,
    coins: 0
  };

  ngOnInit(): void {
    this.subscription = this.profile$.subscribe(profile => {
      this.profile = profile;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
