# angular8-grpc-aspnetcore3-1-demo (work in progress)
Angular 8 + gRPC-web & ASP.NET Core 3.1 + protoc + ts-protoc-gen

This demo show **on Windows** how to generate entities from protos with protoc and ts-protoc-gen plugin to make gRPC-web working

## Step 1

Clone the repository https://github.com/AnthonyGiretti/aspnetcore3-grpc-samples and run it (don't forget to install the database)

## Step 2

Download (Windows version) and install protoc (protobuf compiler) in your PATH here: https://github.com/protocolbuffers/protobuf/releases

## Step 3

Restore the node module with ```npm install command```
The following package are required:

- [ts-protoc-gen](https://github.com/improbable-eng/ts-protoc-gen)
- google-protobuf
- @types/google-protobuf
- [@improbable-eng/grpc-web](https://github.com/improbable-eng/grpc-web/tree/master/client/grpc-web)

## Step 4

Generate your services and requestmessages (only required if you want to generate services and requestmessage from your own proto)

[ts-protoc-gen](https://github.com/improbable-eng/ts-protoc-gen) is a plugin required to generate in Typescript your proto, protoc can't make itself

Execute in **src** root folder this command:

On Windows your have to use the absolute path to **protoc-gen-ts** node module, and use **.cmd** extension

```
protoc --plugin=protoc-gen-ts="{ABSOLUTEPATH}\node_modules\.bin\protoc-gen-ts.cmd" 
       --js_out="import_style=commonjs,binary:src/app/generated" 
       --ts_out="service=grpc-web:src/app/generated" src/app/protos/{YOURPROTOFILENAME}.proto
```

You'll probably have to fix in your generated services file the path of your dependency, extra folder levels have been added in my case

In your yourprotoname_pb_service.d.ts and yourprotoname_pb_service.js remove extra folders level like this:

```import * as src_app_protos_yourprotoname_pb from "../generated/yourprotoname_pb";```

```var src_app_protos_yourprotoname_pb = require("../generated/yourprotoname_pb");```

## Step 5

Create your component and consume your services, example:

```
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
```

Full example here: https://github.com/AnthonyGiretti/angular8-grpc-aspnetcore3-1-demo/blob/master/grpc-demo-aspnetcore31/src/app/app.component.ts
