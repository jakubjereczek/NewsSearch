import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ElectronService } from '../../core/services';

@Injectable({
  providedIn: 'root',

})
export class ConfigurationService {

  defaultValues = {
    newsLimit: 6,
    numberOfDisplayedSavedNews: 5
  }

  public properties = new BehaviorSubject(this.defaultValues);

  constructor(private electronService: ElectronService) {
    if (electronService.isElectron) {
      this.initValues();
    }
  }

  fileName = "./configurationValues.json";
  fs = this.electronService.fs;

  changeProperties(values) {
    this.properties.next(values);
    this.saveChangesInFile();
  }

  initValues() {
    // Sprawdzam czy plik istnieję.
    this.fs.access(this.fileName, this.fs.constants.F_OK, (err) => {
      if (err) {
        // Plik nie istnieje.
        // Zapisywanie lub nadpisanie pliku.
        this.saveChangesInFile();
        this.initValues(); // Teraz czas na odczyt.
      } else {
        // Wczytywanie danych.
        this.fs.readFile(this.fileName, 'utf-8', (err, data) => {
          const res = JSON.parse(data.toString());

          if (err) console.log(err);
          else console.log('Odczytano zawartość pliku konfiguracyjnego.', res);
          console.log(res);
          this.properties.next(res);
        })
      }
    })
  }

  saveChangesInFile() {
    this.fs.writeFile(this.fileName, JSON.stringify(this.properties.value), (err) => {
      if (err) console.log(err);
      else console.log('Plik konfiguracyjny został zmieniony.');
    })
  }

  getProperties() {
    return this.properties;
  }

}
