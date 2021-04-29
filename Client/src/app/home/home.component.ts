import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import News from '../shared/models/news';
import { HttpService } from '../shared/services/http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading = true;
  error = false;
  isSliderActive = false;

  newsList: Array<News> = [];

  constructor(
    private router: Router,
    private httpService: HttpService,
  ) {
    httpService.getNews().subscribe((response) => {
      this.newsList = response.data.models;
      this.loading = false;
    }), (error) => {
      this.loading = false;
      this.error = true;
    }
  }

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






  ngOnInit(): void { }

}
