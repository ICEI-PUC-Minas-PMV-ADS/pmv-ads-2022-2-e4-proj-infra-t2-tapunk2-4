import { Router } from '@angular/router';
import { SubscribeService } from './../../subscribe/subscribe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  login = false;

  constructor(
    private subscribeService: SubscribeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscribeService.watchToken().subscribe({
      next: (v) => {
        this.login = v;
      }
    })
  }

  exit() {
    this.subscribeService.logout();
    this.router.navigate(['index']);
  }

}
