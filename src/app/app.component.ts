import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = "marselo";

  userData: {email: string, role:string} = {
    email: "marselo@gmail.com",
    role: 'admin'
  };

  title = 'curso-angular';

  isAdmin: boolean = true;
}
