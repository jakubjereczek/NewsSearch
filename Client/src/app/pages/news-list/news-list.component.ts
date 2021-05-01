import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeStamp } from 'console';
import { electron } from 'process';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ElectronService } from '../../core/services';
import News from '../../shared/models/news';
import { ConfigurationService } from '../../shared/services/configuration.service';
import { HttpService } from '../../shared/services/http.service';


@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  newsList: Array<News> = [];
  noHiddenNewsList: Array<News> = [];
  loading = true;
  error = false;

  newsLimit: number = 0; // Ilość wyświetlanych elementów jednorazowo na stronie
  currentSite = 1; // Aktualna strona
  after = 0; // Ilosć elementów wyświetlonych wcześniej.
  isChanging = false;

  constructor(
    private router: Router,
    private httpService: HttpService,
    private electronService: ElectronService,
    private configurationService: ConfigurationService
  ) {
    if (electronService.isElectron) {
      this.getConfigurationValues();
    } else {
      this.newsLimit = 4; // Domysla wartość w przypadku uzywania aplikacji jako przeglądarkowej bez dostepu do fs.
    }
    httpService.getNews().subscribe(
      res => {
        this.newsList = res.data.models;
        this.noHiddenNewsList = this.newsList.filter(news => !news.isHidden);

        this.loading = false;
      },
      err => {
        this.loading = false;
        this.error = true;
      },
      () => console.log('HTTP request completed.')
    );
  }

  getConfigurationValues() {
    this.configurationService.properties.subscribe(value => {
      this.newsLimit = value.newsLimit;
    })
  }

  reloadCompontent() {
    this.router.navigateByUrl('/ref', { skipLocationChange: true }).then(() => {
      this.router.navigate(['news-list']);
    });
  }

  changeSiteByPreviousOrNextButton(argument) {
    this.changeSiteByNumberButton(this.currentSite + argument);
  }

  changeSiteByNumberButton(number) {
    this.isChanging = true;
    this.currentSite = number;
    this.after = (this.currentSite - 1) * this.newsLimit;
    setTimeout(() => {
      this.isChanging = false;

    }, 0);
  }


  filterByName(text) {
    this.newsList = this.newsList.map((news) => {
      if (!news.title.toLowerCase().includes(text.toLowerCase())) {
        news.isHidden = true;
      } else {
        news.isHidden = false;
      }
      return news;
    })
    this.noHiddenNewsList = this.newsList.filter(news => !news.isHidden);
    this.after = 0;
    this.currentSite = 1;

    // Muszę dodac wlasciwosc display i wyszukiwać wzgledem niej, a nie podmieniać.
    this.isChanging = false;
  }

  private inputSearchValue: Subject<string> = new Subject();

  ngOnInit(): void {
    this.inputSearchValue.pipe(
      debounceTime(250)
    ).subscribe(searchTextValue => {
      this.filterByName(searchTextValue);
    });
  }

  onKeyUp(searchTextValue: string) {
    this.isChanging = true;
    this.inputSearchValue.next(searchTextValue);
  }

}
