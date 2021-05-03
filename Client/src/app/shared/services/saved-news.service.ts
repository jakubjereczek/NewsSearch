import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { BehaviorSubject } from 'rxjs';
import News from '../models/news';

@Injectable({
  providedIn: 'root'
})


export class SavedNewsService {

  private savedNewsList: Array<News> = [];
  savedNewsListObservable = new BehaviorSubject([]);;

  STORAGE_KEY = 'SAVED_NEWS';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.getNewsFromLocalStorage();
  };

  public isNewsSaved(news: News): boolean {
    let exist = false;
    // sprawdzac po id a jak nie to problem z obs 
    this.savedNewsList.forEach(n => {
      if (n.id === news.id) {
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
      if (n.id === news.id) {
        exist = true;
        return console.log("Nie możesz dodać elementu który juz jest w bazie!");
      }
    })
    if (!exist) {
      this.savedNewsList.push(news);
      this.storage.set(this.STORAGE_KEY, this.savedNewsList);
      this.savedNewsListObservable.next(this.savedNewsList);
    }
  }

  public removeNewsFromLocalStorage(news: News) {
    this.savedNewsList = this.savedNewsList.filter(n => n.id != news.id);
    this.storage.set(this.STORAGE_KEY, this.savedNewsList);
    this.savedNewsListObservable.next(this.savedNewsList);
  }

  private getNewsFromLocalStorage() {
    this.savedNewsList = this.storage.get(this.STORAGE_KEY) || [];
    this.savedNewsListObservable.next(this.savedNewsList);
  }

  getSavedNewsObservable() {
    return this.savedNewsListObservable.asObservable();
  }
}

