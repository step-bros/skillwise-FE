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
  constructor(private profileService: ProfileService) { }
  profile$: Observable<Profile> = this.profileService.getProfile();
  profile: Profile = {
    name: '',
    streak: 0,
    coins: 0
  };

  ngOnInit(): void {
    this.profile$.pipe(first()).subscribe(profile => {
      this.profile = profile;
    }).unsubscribe();
  }

}
