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
   * @returns Promise<Models.GetClientByIdResponse>
   */
  getClientById(id: string, options?: msRest.RequestOptionsBase): Promise<Models.GetClientByIdResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  getClientById(id: string, callback: msRest.ServiceCallback<Models.ClientDto>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  getClientById(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClientDto>): void;
  getClientById(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClientDto>, callback?: msRest.ServiceCallback<Models.ClientDto>): Promise<Models.GetClientByIdResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      getClientByIdOperationSpec,
      callback) as Promise<Models.GetClientByIdResponse>;
  }

  /**
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  deleteMethod(id: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.GetAllClientsResponse>
   */
  getAllClients(options?: msRest.RequestOptionsBase): Promise<Models.GetAllClientsResponse>;
  /**
   * @param callback The callback
   */
  getAllClients(callback: msRest.ServiceCallback<Models.ClientDto[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getAllClients(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ClientDto[]>): void;
  getAllClients(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ClientDto[]>, callback?: msRest.ServiceCallback<Models.ClientDto[]>): Promise<Models.GetAllClientsResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getAllClientsOperationSpec,
      callback) as Promise<Models.GetAllClientsResponse>;
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
   * @returns Promise<Models.CreateClientResponse>
   */
  createClient(options?: Models.APICreateClientOptionalParams): Promise<Models.CreateClientResponse>;
  /**
   * @param callback The callback
   */
  createClient(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  createClient(options: Models.APICreateClientOptionalParams, callback: msRest.ServiceCallback<string>): void;
  createClient(options?: Models.APICreateClientOptionalParams | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.CreateClientResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      createClientOperationSpec,
      callback) as Promise<Models.CreateClientResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.UpdateResponse>
   */
  update(options?: Models.APIUpdateOptionalParams): Promise<Models.UpdateResponse>;
  /**
   * @param callback The callback
   */
  update(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  update(options: Models.APIUpdateOptionalParams, callback: msRest.ServiceCallback<string>): void;
  update(options?: Models.APIUpdateOptionalParams | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.UpdateResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.UpdateResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  importMethod(options?: Models.APIImportMethodOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  importMethod(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  importMethod(options: Models.APIImportMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  importMethod(options?: Models.APIImportMethodOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      importMethodOperationSpec,
      callback);
  }

  /**
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.GetProcessByIdResponse>
   */
  getProcessById(id: string, options?: msRest.RequestOptionsBase): Promise<Models.GetProcessByIdResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  getProcessById(id: string, callback: msRest.ServiceCallback<Models.ProcessDto>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  getProcessById(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProcessDto>): void;
  getProcessById(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProcessDto>, callback?: msRest.ServiceCallback<Models.ProcessDto>): Promise<Models.GetProcessByIdResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      getProcessByIdOperationSpec,
      callback) as Promise<Models.GetProcessByIdResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.GetProcessesResponse>
   */
  getProcesses(options?: Models.APIGetProcessesOptionalParams): Promise<Models.GetProcessesResponse>;
  /**
   * @param callback The callback
   */
  getProcesses(callback: msRest.ServiceCallback<Models.ProcessDtoPagedResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getProcesses(options: Models.APIGetProcessesOptionalParams, callback: msRest.ServiceCallback<Models.ProcessDtoPagedResult>): void;
  getProcesses(options?: Models.APIGetProcessesOptionalParams | msRest.ServiceCallback<Models.ProcessDtoPagedResult>, callback?: msRest.ServiceCallback<Models.ProcessDtoPagedResult>): Promise<Models.GetProcessesResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getProcessesOperationSpec,
      callback) as Promise<Models.GetProcessesResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CreateProcessResponse>
   */
  createProcess(options?: Models.APICreateProcessOptionalParams): Promise<Models.CreateProcessResponse>;
  /**
   * @param callback The callback
   */
  createProcess(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  createProcess(options: Models.APICreateProcessOptionalParams, callback: msRest.ServiceCallback<string>): void;
  createProcess(options?: Models.APICreateProcessOptionalParams | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.CreateProcessResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      createProcessOperationSpec,
      callback) as Promise<Models.CreateProcessResponse>;
  }

  /**
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<Models.GetRepresentativeByIdResponse>
   */
  getRepresentativeById(id: string, options?: msRest.RequestOptionsBase): Promise<Models.GetRepresentativeByIdResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  getRepresentativeById(id: string, callback: msRest.ServiceCallback<Models.RepresentativeDto>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  getRepresentativeById(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RepresentativeDto>): void;
  getRepresentativeById(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RepresentativeDto>, callback?: msRest.ServiceCallback<Models.RepresentativeDto>): Promise<Models.GetRepresentativeByIdResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      getRepresentativeByIdOperationSpec,
      callback) as Promise<Models.GetRepresentativeByIdResponse>;
  }

  /**
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  delete1(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  delete1(id: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  delete1(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  delete1(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      delete1OperationSpec,
      callback);
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.GetRepresentativesResponse>
   */
  getRepresentatives(options?: Models.APIGetRepresentativesOptionalParams): Promise<Models.GetRepresentativesResponse>;
  /**
   * @param callback The callback
   */
  getRepresentatives(callback: msRest.ServiceCallback<Models.RepresentativeDtoPagedResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getRepresentatives(options: Models.APIGetRepresentativesOptionalParams, callback: msRest.ServiceCallback<Models.RepresentativeDtoPagedResult>): void;
  getRepresentatives(options?: Models.APIGetRepresentativesOptionalParams | msRest.ServiceCallback<Models.RepresentativeDtoPagedResult>, callback?: msRest.ServiceCallback<Models.RepresentativeDtoPagedResult>): Promise<Models.GetRepresentativesResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getRepresentativesOperationSpec,
      callback) as Promise<Models.GetRepresentativesResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CreateRepresentativeResponse>
   */
  createRepresentative(options?: Models.APICreateRepresentativeOptionalParams): Promise<Models.CreateRepresentativeResponse>;
  /**
   * @param callback The callback
   */
  createRepresentative(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  createRepresentative(options: Models.APICreateRepresentativeOptionalParams, callback: msRest.ServiceCallback<string>): void;
  createRepresentative(options?: Models.APICreateRepresentativeOptionalParams | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.CreateRepresentativeResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      createRepresentativeOperationSpec,
      callback) as Promise<Models.CreateRepresentativeResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.Update1Response>
   */
  update1(options?: Models.APIUpdate1OptionalParams): Promise<Models.Update1Response>;
  /**
   * @param callback The callback
   */
  update1(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  update1(options: Models.APIUpdate1OptionalParams, callback: msRest.ServiceCallback<string>): void;
  update1(options?: Models.APIUpdate1OptionalParams | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.Update1Response> {
    return this.sendOperationRequest(
      {
        options
      },
      update1OperationSpec,
      callback) as Promise<Models.Update1Response>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  import1(options?: Models.APIImport1OptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  import1(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  import1(options: Models.APIImport1OptionalParams, callback: msRest.ServiceCallback<void>): void;
  import1(options?: Models.APIImport1OptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      import1OperationSpec,
      callback);
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  authenticate(options?: Models.APIAuthenticateOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  authenticate(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  authenticate(options: Models.APIAuthenticateOptionalParams, callback: msRest.ServiceCallback<void>): void;
  authenticate(options?: Models.APIAuthenticateOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      authenticateOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getClientByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Client/{id}",
  urlParameters: [
    Parameters.id
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ClientDto
    },
    default: {}
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "Client/{id}",
  urlParameters: [
    Parameters.id
  ],
  responses: {
    200: {},
    default: {}
  },
  serializer
};

const getAllClientsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Client/all",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ClientDto"
            }
          }
        }
      }
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

const createClientOperationSpec: msRest.OperationSpec = {
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

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "Client",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.UpdateClientCommand
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

const importMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Client/import",
  formDataParameters: [
    Parameters.file
  ],
  contentType: "multipart/form-data",
  responses: {
    200: {},
    default: {}
  },
  serializer
};

const getProcessByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Process/{id}",
  urlParameters: [
    Parameters.id
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProcessDto
    },
    default: {}
  },
  serializer
};

const getProcessesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Process",
  queryParameters: [
    Parameters.filters,
    Parameters.sorts,
    Parameters.page,
    Parameters.pageSize
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProcessDtoPagedResult
    },
    default: {}
  },
  serializer
};

const createProcessOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Process",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.CreateProcessCommand
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

const getRepresentativeByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Representative/{id}",
  urlParameters: [
    Parameters.id
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RepresentativeDto
    },
    default: {}
  },
  serializer
};

const delete1OperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "Representative/{id}",
  urlParameters: [
    Parameters.id
  ],
  responses: {
    200: {},
    default: {}
  },
  serializer
};

const getRepresentativesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Representative",
  queryParameters: [
    Parameters.filters,
    Parameters.sorts,
    Parameters.page,
    Parameters.pageSize
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RepresentativeDtoPagedResult
    },
    default: {}
  },
  serializer
};

const createRepresentativeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Representative",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.CreateRepresentativeCommand
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

const update1OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "Representative",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.UpdateRepresentativeCommand
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

const import1OperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Representative/import",
  formDataParameters: [
    Parameters.file
  ],
  contentType: "multipart/form-data",
  responses: {
    200: {},
    default: {}
  },
  serializer
};

const authenticateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Representative/authenticate",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.AuthenticateDto
  },
  responses: {
    200: {},
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
