import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  user: string[] = [];

  constructor(
    private userService: UserService,
    private themeService: ThemeService
  ) {}

  isDark = false;

  ngOnInit(): void {
    this.isDark = this.themeService.isDarkMode();
    // this.user = this.userService.getUser();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDark = this.themeService.isDarkMode();
  }
}
