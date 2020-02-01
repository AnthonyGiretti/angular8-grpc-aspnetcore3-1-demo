// package: 
// file: src/app/protos/country.proto

var src_app_protos_country_pb = require("../generated/country_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var CountryService = (function () {
  function CountryService() {}
  CountryService.serviceName = "CountryService";
  return CountryService;
}());

CountryService.GetAll = {
  methodName: "GetAll",
  service: CountryService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_country_pb.EmptyRequest,
  responseType: src_app_protos_country_pb.CountriesReply
};

CountryService.GetById = {
  methodName: "GetById",
  service: CountryService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_country_pb.CountrySearchRequest,
  responseType: src_app_protos_country_pb.CountryReply
};

CountryService.Create = {
  methodName: "Create",
  service: CountryService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_country_pb.CountryCreateRequest,
  responseType: src_app_protos_country_pb.CountryReply
};

CountryService.Update = {
  methodName: "Update",
  service: CountryService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_country_pb.CountryRequest,
  responseType: src_app_protos_country_pb.CountryReply
};

CountryService.Delete = {
  methodName: "Delete",
  service: CountryService,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_country_pb.CountrySearchRequest,
  responseType: src_app_protos_country_pb.EmptyReply
};

exports.CountryService = CountryService;

function CountryServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

CountryServiceClient.prototype.getAll = function getAll(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CountryService.GetAll, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CountryServiceClient.prototype.getById = function getById(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CountryService.GetById, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CountryServiceClient.prototype.create = function create(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CountryService.Create, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CountryServiceClient.prototype.update = function update(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CountryService.Update, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

CountryServiceClient.prototype.delete = function pb_delete(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(CountryService.Delete, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.CountryServiceClient = CountryServiceClient;

