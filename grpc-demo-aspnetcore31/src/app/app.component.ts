import { Component, OnInit } from '@angular/core';
import {grpc} from "@improbable-eng/grpc-web";
import {CountryService} from "./generated/country_pb_service";
import {EmptyRequest, CountriesReply, CountryReply} from "./generated/country_pb";
import { CountryModel } from './models/countryModel';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'grpc-web-demo';
  public countries: CountryModel[] = []; 

  public ngOnInit() {

    const getCountryRequest = new EmptyRequest();

/*
    grpc.unary(CountryService.GetAll, {
      request: getCountryRequest,
      host: "https://demogrpcweblinux.azurewebsites.net", //https://grpcwebdemo.azurewebsites.net (Windows App Service)
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
    */

    grpc.invoke(CountryService.GetAllStreamed, {
      request: getCountryRequest,
      host: "https://localhost:5001",
      onMessage: (message: CountryReply) => {
        var country = message.toObject() as CountryReply.AsObject;
        this.countries.push(
           <CountryModel>({
             name: country.name,
             description: country.description
          }));
      },
      onEnd: (code: grpc.Code, msg: string | undefined, trailers: grpc.Metadata) => {
        if (code == grpc.Code.OK) {
          console.log("all countries downloaded")
        } else {
          console.log("hit an error", code, msg, trailers);
        }
      }
    });
  }
}