import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ElectronService } from '../../core/services';
import News from '../../shared/models/news';
import { ConfigurationService } from '../../shared/services/configuration.service';
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

  numberOfDisplayedSavedNews = 0; // Ilość wyswietlanych elementów jednorazowo

  constructor(
    private savedNewsService: SavedNewsService,
    private electronService: ElectronService,
    private configurationService: ConfigurationService) {
    this.$savedNews = this.savedNewsService.getSavedNewsObservable();
    if (electronService.isElectron) {
      this.getConfigurationValues();
    } else {
      this.numberOfDisplayedSavedNews = this.configurationService.properties.value.numberOfDisplayedSavedNews;
    }
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

  displayMore() {
    this.numberOfDisplayedSavedNews += this.numberOfDisplayedSavedNews;
  }

  getConfigurationValues() {
    this.configurationService.properties.subscribe(value => {
      this.numberOfDisplayedSavedNews = value.numberOfDisplayedSavedNews;
    })
  }

}
