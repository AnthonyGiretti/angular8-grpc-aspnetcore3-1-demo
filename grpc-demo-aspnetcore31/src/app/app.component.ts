import { Component, OnInit } from '@angular/core';
import {grpc} from "@improbable-eng/grpc-web";
import {CountryService} from "./generated/country_pb_service";
import {EmptyRequest, CountryReply, CountriesReply} from "./generated/country_pb";
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

    const getBookRequest = new EmptyRequest();

    grpc.unary(CountryService.GetAll, {
      request: getBookRequest,
      host: "https://localhost:5001",
      onEnd: res => {
        const { status, statusMessage, headers, message, trailers } = res;
        if (status === grpc.Code.OK && message) {
        var result = message.toObject() as CountriesReply.AsObject;
        this.countries = result.countriesList.map(country => 
          <CountryModel>({
            name: country.name,
            description: country.description
          }));
        }
      }
    });
  }
}