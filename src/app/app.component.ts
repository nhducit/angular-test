import { Component, OnInit, VERSION } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

type User = {
  name: string;
};
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  data = new Subject<User | null>();
  ngOnInit() {
    this.data.next(null);
    setTimeout(() => {
      this.data.next({ name: 'foo' });
    }, 0);
  }
}
