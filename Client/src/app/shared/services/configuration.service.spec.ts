import { IterableDiffers } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { TestBed } from '@angular/core/testing';
import { ElectronService } from '../../core/services';

import { ConfigurationService } from './configuration.service';

describe('ConfigurationService', () => {

    let service: ConfigurationService;
    let electronService: ElectronService = new ElectronService();

    beforeEach(() => {
        service = new ConfigurationService(electronService);
    });

    it('getProperties should return value from observable', () => {
        service.getProperties().subscribe((properties) => {
            expect(properties).toEqual(service.defaultValues);
        })
    });

});
