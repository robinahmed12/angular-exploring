import { Component, Input, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html',
  providers: [LogService],
})
export class AccountComponent implements OnInit {
  @Input() account!: { name: string; status: string };
  @Input() id!: number;
  constructor(private loggingService: LogService) {}

  ngOnInit() {}

  onSetTo(status: string) {
    this.loggingService.logStatusChange(status);
  }
}
