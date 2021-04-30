import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { electron } from 'process';
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

  ngOnInit(): void {
  }

}
