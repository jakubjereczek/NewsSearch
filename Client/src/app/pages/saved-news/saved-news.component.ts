import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import News from '../../shared/models/news';
import { SavedNewsService } from '../../shared/services/saved-news.service';

@Component({
  selector: 'app-saved-news',
  templateUrl: './saved-news.component.html',
  styleUrls: ['./saved-news.component.scss']
})
export class SavedNewsComponent implements OnInit {

  $savedNews: Observable<Array<News>>;

  isModalActive = false;
  newsInModal: News = null;

  constructor(private savedNewsService: SavedNewsService) {
    this.$savedNews = this.savedNewsService.getSavedNewsObservable();
  }

  ngOnInit(): void {
  }

  // Modal
  openModal(news: News) {
    this.newsInModal = news;
    this.isModalActive = true;
  }

  clearModal() {
    this.newsInModal = null;
    this.isModalActive = false;
  }

}
