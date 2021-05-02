import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import News from '../models/news';

@Injectable({
  providedIn: 'root'
})


export class SavedNewsService {
  // TODO: Serwis z listą zapisanych newsów.
  // Używam localStorage aby aplikacja działała rownież w przeglądarce.

  savedNewsList: Array<News> = [];

  STORAGE_KEY = 'SAVED_NEWS';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.getNewsFromLocalStorage();
  };

  public isNewsSaved(news: News): boolean {
    let exist = false;
    this.savedNewsList.forEach(n => {
      if (n === news) {
        console.log(n, news);
        exist = true;
      }
    })
    if (exist) {
      return true;
    }
    return false;
  }

  public addNewsToLocalStorage(news: News) {
    let exist = false;
    this.savedNewsList.forEach(n => {
      if (n === news) {
        exist = true;
        return console.log("NIe możesz dodać elementu który juz jest w bazie!");
      }
    })
    if (!exist) {
      this.savedNewsList.push(news);
      this.storage.set(this.STORAGE_KEY, this.savedNewsList);
    }
    console.log(this.savedNewsList)
  }

  public removeNewsFromLocalStorage(news: News) {
    this.savedNewsList = this.savedNewsList.filter(n => n.id != news.id);
    this.storage.set(this.STORAGE_KEY, this.savedNewsList);
    console.log(this.savedNewsList)
  }

  private getNewsFromLocalStorage() {
    this.savedNewsList = this.storage.get(this.STORAGE_KEY) || [];
  }
}
