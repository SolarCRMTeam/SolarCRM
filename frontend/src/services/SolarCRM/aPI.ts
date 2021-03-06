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
  deleteClient(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  deleteClient(id: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteClient(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteClient(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      deleteClientOperationSpec,
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
   * @returns Promise<Models.UpdateClientResponse>
   */
  updateClient(options?: Models.APIUpdateClientOptionalParams): Promise<Models.UpdateClientResponse>;
  /**
   * @param callback The callback
   */
  updateClient(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  updateClient(options: Models.APIUpdateClientOptionalParams, callback: msRest.ServiceCallback<string>): void;
  updateClient(options?: Models.APIUpdateClientOptionalParams | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.UpdateClientResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      updateClientOperationSpec,
      callback) as Promise<Models.UpdateClientResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  importClient(options?: Models.APIImportClientOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  importClient(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  importClient(options: Models.APIImportClientOptionalParams, callback: msRest.ServiceCallback<void>): void;
  importClient(options?: Models.APIImportClientOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      importClientOperationSpec,
      callback);
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.GetEventsResponse>
   */
  getEvents(options?: Models.APIGetEventsOptionalParams): Promise<Models.GetEventsResponse>;
  /**
   * @param callback The callback
   */
  getEvents(callback: msRest.ServiceCallback<Models.EventDto[]>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  getEvents(options: Models.APIGetEventsOptionalParams, callback: msRest.ServiceCallback<Models.EventDto[]>): void;
  getEvents(options?: Models.APIGetEventsOptionalParams | msRest.ServiceCallback<Models.EventDto[]>, callback?: msRest.ServiceCallback<Models.EventDto[]>): Promise<Models.GetEventsResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      getEventsOperationSpec,
      callback) as Promise<Models.GetEventsResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<Models.CreateEventResponse>
   */
  createEvent(options?: Models.APICreateEventOptionalParams): Promise<Models.CreateEventResponse>;
  /**
   * @param callback The callback
   */
  createEvent(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  createEvent(options: Models.APICreateEventOptionalParams, callback: msRest.ServiceCallback<string>): void;
  createEvent(options?: Models.APICreateEventOptionalParams | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.CreateEventResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      createEventOperationSpec,
      callback) as Promise<Models.CreateEventResponse>;
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
   * @param id
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteProcess(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  deleteProcess(id: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteProcess(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteProcess(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      deleteProcessOperationSpec,
      callback);
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
  deleteRepresentative(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param id
   * @param callback The callback
   */
  deleteRepresentative(id: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param id
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteRepresentative(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteRepresentative(id: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        id,
        options
      },
      deleteRepresentativeOperationSpec,
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
   * @returns Promise<Models.UpdateRepresentativeResponse>
   */
  updateRepresentative(options?: Models.APIUpdateRepresentativeOptionalParams): Promise<Models.UpdateRepresentativeResponse>;
  /**
   * @param callback The callback
   */
  updateRepresentative(callback: msRest.ServiceCallback<string>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  updateRepresentative(options: Models.APIUpdateRepresentativeOptionalParams, callback: msRest.ServiceCallback<string>): void;
  updateRepresentative(options?: Models.APIUpdateRepresentativeOptionalParams | msRest.ServiceCallback<string>, callback?: msRest.ServiceCallback<string>): Promise<Models.UpdateRepresentativeResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      updateRepresentativeOperationSpec,
      callback) as Promise<Models.UpdateRepresentativeResponse>;
  }

  /**
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  importRepresentative(options?: Models.APIImportRepresentativeOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param callback The callback
   */
  importRepresentative(callback: msRest.ServiceCallback<void>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  importRepresentative(options: Models.APIImportRepresentativeOptionalParams, callback: msRest.ServiceCallback<void>): void;
  importRepresentative(options?: Models.APIImportRepresentativeOptionalParams | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        options
      },
      importRepresentativeOperationSpec,
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

const deleteClientOperationSpec: msRest.OperationSpec = {
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

const updateClientOperationSpec: msRest.OperationSpec = {
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

const importClientOperationSpec: msRest.OperationSpec = {
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

const getEventsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Event/processId",
  queryParameters: [
    Parameters.processId
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "EventDto"
            }
          }
        }
      }
    },
    default: {}
  },
  serializer
};

const createEventOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "Event",
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.CreateEventCommand
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

const deleteProcessOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "Process/{id}",
  urlParameters: [
    Parameters.id
  ],
  responses: {
    200: {},
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

const deleteRepresentativeOperationSpec: msRest.OperationSpec = {
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

const updateRepresentativeOperationSpec: msRest.OperationSpec = {
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

const importRepresentativeOperationSpec: msRest.OperationSpec = {
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
