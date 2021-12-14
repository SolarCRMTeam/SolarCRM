/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { APIContext } from "./aPIContext";

class API extends APIContext {
  /**
   * Initializes a new instance of the API class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.APIOptions) {
    super(credentials, options);
  }

  /**
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.GetByIdResponse>
   */
  getById(id: string, options?: msRest.RequestOptionsBase): Promise<Models.GetByIdResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  getById(id: string, callback: msRest.ServiceCallback<Models.ClientDto>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  getById(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClientDto>): void;
  getById(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClientDto>, callback?: msRest.ServiceCallback<Models.ClientDto>): Promise<Models.GetByIdResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      getByIdOperationSpec,
      callback) as Promise<Models.GetByIdResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.GetClientsResponse>
   */
  getClients(options?: Models.APIGetClientsOptionalParams): Promise<Models.GetClientsResponse>;
  /**
   * @param callback The callback
   */
  getClients(callback: msRest.ServiceCallback<Models.ClientDtoPagedResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getClients(options: Models.APIGetClientsOptionalParams, callback: msRest.ServiceCallback<Models.ClientDtoPagedResult>): void;
  getClients(options?: Models.APIGetClientsOptionalParams | msRest.ServiceCallback<Models.ClientDtoPagedResult>, callback?: msRest.ServiceCallback<Models.ClientDtoPagedResult>): Promise<Models.GetClientsResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getClientsOperationSpec,
      callback) as Promise<Models.GetClientsResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CreateResponse>
   */
  create(options?: Models.APICreateOptionalParams): Promise<Models.CreateResponse>;
  /**
   * @param callback The callback
   */
  create(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  create(options: Models.APICreateOptionalParams, callback: msRest.ServiceCallback<string>): void;
  create(options?: Models.APICreateOptionalParams | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.CreateResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      createOperationSpec,
      callback) as Promise<Models.CreateResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.GetById1Response>
   */
  getById1(options?: Models.APIGetById1OptionalParams): Promise<Models.GetById1Response>;
  /**
   * @param callback The callback
   */
  getById1(callback: msRest.ServiceCallback<Models.RepresentativeDto>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getById1(options: Models.APIGetById1OptionalParams, callback: msRest.ServiceCallback<Models.RepresentativeDto>): void;
  getById1(options?: Models.APIGetById1OptionalParams | msRest.ServiceCallback<Models.RepresentativeDto>, callback?: msRest.ServiceCallback<Models.RepresentativeDto>): Promise<Models.GetById1Response> {
    return this.sendOperationRequest(
      {
        options
      },
      getById1OperationSpec,
      callback) as Promise<Models.GetById1Response>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Client/{id}",
  urlParameters: [
    Parameters.id0
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClientDto
    },
    default: {}
  },
  serializer
};

const getClientsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Client",
  queryParameters: [
    Parameters.filters,
    Parameters.sorts,
    Parameters.page,
    Parameters.pageSize
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClientDtoPagedResult
    },
    default: {}
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Client",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.CreateClientCommand
  },
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Uuid"
        }
      }
    },
    default: {}
  },
  serializer
};

const getById1OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Representative",
  queryParameters: [
    Parameters.id1
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RepresentativeDto
    },
    default: {}
  },
  serializer
};

export {
  API,
  APIContext,
  Models as APIModels,
  Mappers as APIMappers
};
