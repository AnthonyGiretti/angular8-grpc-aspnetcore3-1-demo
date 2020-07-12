import { Component, OnInit } from '@angular/core';
import {grpc} from '@improbable-eng/grpc-web';
import {CountryService} from './generated/country_pb_service';
import {EmptyRequest, CountriesReply, CountryCreateRequest} from './generated/country_pb';
import { CountryModel } from './models/countryModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'grpc-web-demo';
  public countries: CountryModel[] = [];

  public ngOnInit() {

    const getCountryRequestAll = new EmptyRequest();
    const getCountryRequestId = new EmptyRequest();
    const setCountryCreateRequest = new EmptyRequest();
    const getCountrySearchRequest = new EmptyRequest();

    grpc.unary(CountryService.GetAll, {
      request: getCountryRequestAll,
      /*https://grpcwebdemo.azurewebsites.net (Windows App Service)*/
      host: 'https://demogrpcweblinux.azurewebsites.net',
      onEnd: res => {
        const { status, statusMessage, headers, message, trailers } = res;
        if (status === grpc.Code.OK && message) {
        const result = message.toObject() as CountriesReply.AsObject;
        this.countries = result.countriesList.map(country =>
          ({
            name: country.name,
            description: country.description
          }) as CountryModel);
        }
      }
    });

    grpc.unary(CountryService.GetAll, {
      request: getCountryRequestId,
      /*https://grpcwebdemo.azurewebsites.net (Windows App Service)*/
      host: 'https://demogrpcweblinux.azurewebsites.net',
      onEnd: res => {
        const { status, statusMessage, headers, message, trailers } = res;
        if (status === grpc.Code.OK && message) {
          const result = message.toObject() as CountriesReply.AsObject;
          this.countries = result.countriesList.map(country =>
            ({
              name: country.name,
              description: country.description
            }) as CountryModel);
        }
      }
    });

    grpc.unary(CountryService.GetAll, {
      request: getCountrySearchRequest,
      /*https://grpcwebdemo.azurewebsites.net (Windows App Service)*/
      host: 'https://demogrpcweblinux.azurewebsites.net',
      onEnd: res => {
        const { status, statusMessage, headers, message, trailers } = res;
        if (status === grpc.Code.OK && message) {
          const result = message.toObject() as CountriesReply.AsObject;
          this.countries = result.countriesList.map(country =>
            ({
              name: country.name,
              description: country.description
            }) as CountryModel);
        }
      }
    });

    grpc.unary(CountryService.GetAll, {
      request: setCountryCreateRequest,
      /*https://grpcwebdemo.azurewebsites.net (Windows App Service)*/
      host: 'https://demogrpcweblinux.azurewebsites.net',
      onEnd: res => {
        const { status, statusMessage, headers, message, trailers } = res;
        if (status === grpc.Code.OK && message) {
          const result = message.toObject() as CountriesReply.AsObject;
          this.countries = result.countriesList.map(country =>
            ({
              name: country.name,
              description: country.description
            }) as CountryModel);
        }
      }
    });

  }
}
