import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mf-shell';

  constructor(private router: Router) { }
  gotomain(url: any) {
    this.router.navigateByUrl('/' + url)
  }
}
