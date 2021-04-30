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
    newsLimit: 3,
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
      this.loading = false;
    })
  }

  changeNewsLimit(event: Event) {
    const target = event.target as HTMLInputElement;

    if (Number(target.value) != this.properties.newsLimit) {
      let value = Number(target.value);
      if (value < 1) {
        value = 1;
      }
      if (value > 10) {
        value = 10;
      }
      this.properties.newsLimit = value;
      this.configurationService.changeProperties(this.properties);
    }
  }


}
