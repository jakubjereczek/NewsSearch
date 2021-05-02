import { Component, HostListener } from '@angular/core';
import { ElectronService } from './core/services';
import { AppConfig } from '../environments/environment';
import { Router } from '@angular/router';
import News from './shared/models/news';
import { HttpService } from './shared/services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router,
    private electronService: ElectronService,
  ) {
    console.log('AppConfig', AppConfig);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log('Run in electron');
      console.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      console.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      console.log('Run in browser');
    }
  }

  /*
  isMouseDown: boolean = false;
  startY: number = 0;

  @HostListener('mouseup')
  onMouseUp() {
    this.isMouseDown = false;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isMouseDown = false;
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown() {
    this.isMouseDown = true;
    const e = event as MouseEvent;
    this.startY = e.clientY;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isMouseDown) {
      const target = event.target as HTMLTextAreaElement;
      target.scrollBy(0, -(event.clientY - this.startY));
      this.startY = event.clientY;
    }
  }
*/

  openGithub() {
    window.open('https://github.com/jakubjereczek/NewsSearch', '_blank', 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
  }

}
