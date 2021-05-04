import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../core/services';
import { ConfigurationService } from '../../shared/services/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  loading = true;

  properties = { // Domyslne wartości
    newsLimit: 0,
    numberOfDisplayedSavedNews: 0
  };

  constructor(private electronService: ElectronService,
    private configurationService: ConfigurationService) {
    this.getConfigurationValues();
  }

  ngOnInit(): void {
  }

  getConfigurationValues() {
    this.configurationService.properties.subscribe(values => {
      this.properties = values;
      console.log("Pobrano wartości!");
      console.log(this.properties)
      this.loading = false;
    })
  }

  changeNewsLimit(event: Event) {
    const target = event.target as HTMLInputElement;

    if (Number(target.value) != this.properties.newsLimit) {
      let value = this.numberFromTheRange(Number(target.value));
      this.properties.newsLimit = value;
      this.configurationService.changeProperties(this.properties);
    }
  }

  changeNumberOfDisplayedSavedNews(event: Event) {
    const target = event.target as HTMLInputElement;

    if (Number(target.value) != this.properties.numberOfDisplayedSavedNews) {
      let value = this.numberFromTheRange(Number(target.value));
      this.properties.numberOfDisplayedSavedNews = value;
      this.configurationService.changeProperties(this.properties);
    }
  }

  numberFromTheRange(a: number) {
    if (a > 10) {
      a = 10;
    } else if (a < 0) {
      a = 0;
    }
    return a;
  }
}
