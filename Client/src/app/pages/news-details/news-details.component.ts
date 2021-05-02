import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ElectronService } from '../../core/services';
import News from '../../shared/models/news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  @Input()
  news: News;

  @Input() clearModal: () => any;

  @ViewChild('modal') modal: ElementRef<HTMLElement>;


  constructor(private electronService: ElectronService) {
    // const BrowserWindow = electronService.browserWindow;
    // const win = new BrowserWindow({ titleBarStyle: 'hidden' })
    // win.show()
    // console.log(BrowserWindow)
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.modal.nativeElement.classList.toggle("is-active");
    this.clearModal();
  }

  // 
  returnTitle() {
    if (this.news.title.length < 50) {
      return this.news.title;
    } else {
      return this.news.title.slice(0, 50) + "...";
    }
  }

  openWebsiteInNewWindow() {
    window.open(this.news.link, '_blank', 'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes');
  }

}
