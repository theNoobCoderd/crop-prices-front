import { TestBed } from '@angular/core/testing';

import { ExtractionDatesService } from './extraction-dates.service';

describe('ExtractionDatesService', () => {
	let service: ExtractionDatesService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ExtractionDatesService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
