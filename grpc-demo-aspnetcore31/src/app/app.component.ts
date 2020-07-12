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

    const getCountryServiceGetById = new EmptyRequest();
    const getCountryServiceCreate  = new EmptyRequest();
    const getCountryServiceUpdate  = new EmptyRequest();
    const getCountryServiceDelete  = new EmptyRequest();

    this.getCoutryFindAll();
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

}

