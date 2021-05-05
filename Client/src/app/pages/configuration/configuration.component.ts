import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ElectronService } from '../../core/services';
import { ConfigurationService } from '../../shared/services/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss'],
})
export class ConfigurationComponent implements OnInit {

  subscription: Subscription;
  loading = true;

  properties = {
    newsLimit: 0,
    numberOfDisplayedSavedNews: 0
  };

  constructor(private electronService: ElectronService,
    private configurationService: ConfigurationService) {
    this.loading = true;
    this.getConfigurationValues();
  }

  ngOnInit(): void {
  }

  getConfigurationValues() {
    this.subscription = this.configurationService.properties.subscribe(values => {
      this.properties = Object.assign({}, values);

      console.log("POBRANO DANE/ZMIENIONO DANE", values);
      this.loading = false;
    })
  }

  changeProperties() {
    console.log(this.properties)
    this.properties.newsLimit = this.numberFromTheRange(this.properties.newsLimit);
    this.properties.numberOfDisplayedSavedNews = this.numberFromTheRange(this.properties.numberOfDisplayedSavedNews);
    this.configurationService.changeProperties(this.properties);

  }

  numberFromTheRange(a: number) {
    if (a > 10) {
      a = 10;
    } else if (a < 0) {
      a = 0;
    }
    return a;
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
}
