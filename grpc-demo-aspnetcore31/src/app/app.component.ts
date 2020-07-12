import { Component, OnInit } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import {CountryService, CountryServiceCreate, CountryServiceDelete,
        CountryServiceGetAll, CountryServiceGetById, CountryServiceUpdate } from './generated/country_pb_service';
import {EmptyRequest, CountriesReply, CountryCreateRequest, CountrySearchRequest } from './generated/country_pb';
import { CountryModel } from './models/countryModel';
import {host} from '@angular-devkit/build-angular/src/test-utils';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'gRPC';
  public countries: CountryModel[] = [];
  public host  = 'https://demogrpcweblinux.azurewebsites.net'; /* host: 'https://demogrpcweblinux.azurewebsites.net',*/

  public ngOnInit() {
    this.getCoutryFindAll();
    this.getCoutryFindName();
    this.getCoutryFindId();
    this.getCoutryCreate();
    this.getCoutryUpdate();
    this.getCoutryDelete();
  }

  getCoutryFindAll() {
    const getCountryServiceGetAll  = new EmptyRequest();
    grpc.unary(CountryService.GetAll, {
      request: getCountryServiceGetAll,
      host: this.host,
      onEnd: res => {
        const { status, message} = res;
        if (status === grpc.Code.OK && message) {
          const result = message.toObject() as CountriesReply.AsObject;
          this.countries = result.countriesList.map(country =>
            ({
              id: country.id,
              name: country.name,
              description: country.description
            }) as CountryModel);
        }
      }
    });
    }

  getCoutryFindName() {
    const getCountryServiceGetByName  = new EmptyRequest();
    grpc.unary(CountryService.GetAll, {
      request: getCountryServiceGetByName,
      host: this.host,
      onEnd: res => {
        const { status, message} = res;
        if (status === grpc.Code.OK && message) {
          const result = message.toObject() as CountriesReply.AsObject;
          this.countries = result.countriesList.map(country =>
            ({
              id: country.id,
              name: country.name,
              description: country.description
            }) as CountryModel);
        }
      }
    });
  }

  getCoutryCreate() {
    const getCountryServiceCreate  = new EmptyRequest();
    grpc.unary(CountryService.GetById, {
      request: getCountryServiceCreate,
      host: this.host,
      onEnd: res => {
        const { status, message} = res;
        if (status === grpc.Code.OK && message) {
          const result = message.toObject() as CountriesReply.AsObject;
          this.countries = result.countriesList.map(country =>
            ({
              id: country.id,
              name: country.name,
              description: country.description
            }) as CountryModel);
        }
      }
    });
  }

  getCoutryFindId() {
    const getCountryServiceGetById  = new EmptyRequest();
    grpc.unary(CountryService.GetById, {
      request: getCountryServiceGetById,
      host: this.host,
      onEnd: res => {
        const { status, message} = res;
        if (status === grpc.Code.OK && message) {
          const result = message.toObject() as CountriesReply.AsObject;
          this.countries = result.countriesList.map(country =>
            ({
              id: country.id,
              name: country.name,
              description: country.description
            }) as CountryModel);
        }
      }
    });
  }

  getCoutryUpdate() {
    const getCountryServiceUpdate  = new EmptyRequest();
    grpc.unary(CountryService.GetById, {
      request: getCountryServiceUpdate,
      host: this.host,
      onEnd: res => {
        const { status, message} = res;
        if (status === grpc.Code.OK && message) {
          const result = message.toObject() as CountriesReply.AsObject;
          this.countries = result.countriesList.map(country =>
            ({
              id: country.id,
              name: country.name,
              description: country.description
            }) as CountryModel);
        }
      }
    });
  }

  getCoutryDelete() {
    const getCountryServiceDelete  = new EmptyRequest();
    grpc.unary(CountryService.GetById, {
      request: getCountryServiceDelete,
      host: this.host,
      onEnd: res => {
        const { status, message} = res;
        if (status === grpc.Code.OK && message) {
          const result = message.toObject() as CountriesReply.AsObject;
          this.countries = result.countriesList.map(country =>
            ({
              id: country.id,
              name: country.name,
              description: country.description
            }) as CountryModel);
        }
      }
    });
  }

}

