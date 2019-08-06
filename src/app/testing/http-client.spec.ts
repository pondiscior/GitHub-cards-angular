import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Data } from '@angular/router';

describe('HttpClient testing', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule ]
      });
  
      // Inject the http service and test controller for each test
      httpClient = TestBed.get(HttpClient);
      httpTestingController = TestBed.get(HttpTestingController);
    });
    /// Tests begin ///
    it('can test HttpClient.get', () => {
        const testData: Data = {name: 'Test Data'};
        let testUrl = "api.github.com/users/glf30";
        // Make an HTTP GET request
        httpClient.get<Data>(testUrl)
          .subscribe(data =>
            // When observable resolves, result should match test data
            expect(data).toEqual(testData)
          );
      
        // The following `expectOne()` will match the request's URL.
        // If no requests or multiple requests matched that URL
        // `expectOne()` would throw.
        const req = httpTestingController.expectOne('/data');
      
        // Assert that the request is a GET.
        expect(req.request.method).toEqual('GET');
      
        // Respond with mock data, causing Observable to resolve.
        // Subscribe callback asserts that correct data was returned.
        req.flush(testData);
      
        // Finally, assert that there are no outstanding requests.
        httpTestingController.verify();
      });
      afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpTestingController.verify();
      });


  });


