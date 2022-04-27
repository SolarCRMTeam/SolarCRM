/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";

/**
 * An interface representing ClientDto.
 */
export interface ClientDto {
  id?: string;
  identifier?: string;
  companyName?: string;
  name?: string;
  surname?: string;
  street?: string;
  address?: string;
  place?: string;
  postalCode?: string;
  voivodeship?: string;
  district?: string;
  mail?: string;
  phoneNumber?: string;
  comments?: string;
  clientType?: number;
}

/**
 * An interface representing ClientDtoPagedResult.
 */
export interface ClientDtoPagedResult {
  results?: ClientDto[];
  rowCount?: number;
  pageSize?: number;
  currentPage?: number;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly totalPagesNumber?: number;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hasPreviousPage?: boolean;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hasNextPage?: boolean;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly firstRowOnPage?: number;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastRowOnPage?: number;
}

/**
 * An interface representing CreateClientCommand.
 */
export interface CreateClientCommand {
  companyName?: string;
  name?: string;
  surname?: string;
  street?: string;
  address?: string;
  place?: string;
  postalCode?: string;
  voivodeship?: string;
  district?: string;
  mail?: string;
  phoneNumber?: string;
  comments?: string;
  clientType?: number;
}

/**
 * An interface representing UpdateClientCommand.
 */
export interface UpdateClientCommand {
  id?: string;
  companyName?: string;
  name?: string;
  surname?: string;
  street?: string;
  address?: string;
  place?: string;
  postalCode?: string;
  voivodeship?: string;
  district?: string;
  mail?: string;
  phoneNumber?: string;
  comments?: string;
  clientType?: number;
}

/**
 * An interface representing ProcessDto.
 */
export interface ProcessDto {
  id?: string;
}

/**
 * An interface representing ProcessDtoPagedResult.
 */
export interface ProcessDtoPagedResult {
  results?: ProcessDto[];
  rowCount?: number;
  pageSize?: number;
  currentPage?: number;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly totalPagesNumber?: number;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hasPreviousPage?: boolean;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hasNextPage?: boolean;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly firstRowOnPage?: number;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastRowOnPage?: number;
}

/**
 * An interface representing RepresentativeDto.
 */
export interface RepresentativeDto {
  id?: string;
  name?: string;
  surname?: string;
  street?: string;
  postalCode?: string;
  place?: string;
  address?: string;
  voivodeship?: string;
  district?: string;
  mail?: string;
  phoneNumber?: string;
  comments?: string;
}

/**
 * An interface representing RepresentativeDtoPagedResult.
 */
export interface RepresentativeDtoPagedResult {
  results?: RepresentativeDto[];
  rowCount?: number;
  pageSize?: number;
  currentPage?: number;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly totalPagesNumber?: number;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hasPreviousPage?: boolean;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly hasNextPage?: boolean;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly firstRowOnPage?: number;
  /**
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly lastRowOnPage?: number;
}

/**
 * An interface representing CreateRepresentativeCommand.
 */
export interface CreateRepresentativeCommand {
  name?: string;
  surname?: string;
  street?: string;
  postalCode?: string;
  address?: string;
  place?: string;
  voivodeship?: string;
  district?: string;
  mail?: string;
  phoneNumber?: string;
  comments?: string;
}

/**
 * An interface representing UpdateRepresentativeCommand.
 */
export interface UpdateRepresentativeCommand {
  id?: string;
  name?: string;
  surname?: string;
  street?: string;
  address?: string;
  postalCode?: string;
  place?: string;
  voivodeship?: string;
  district?: string;
  mail?: string;
  phoneNumber?: string;
  comments?: string;
}

/**
 * An interface representing AuthenticateDto.
 */
export interface AuthenticateDto {
  login?: string;
  password?: string;
}

/**
 * An interface representing APIOptions.
 */
export interface APIOptions extends ServiceClientOptions {
  baseUri?: string;
}

/**
 * Optional Parameters.
 */
export interface APIGetClientsOptionalParams extends msRest.RequestOptionsBase {
  filters?: string;
  sorts?: string;
  page?: number;
  pageSize?: number;
}

/**
 * Optional Parameters.
 */
export interface APICreateOptionalParams extends msRest.RequestOptionsBase {
  body?: CreateClientCommand;
}

/**
 * Optional Parameters.
 */
export interface APIUpdateOptionalParams extends msRest.RequestOptionsBase {
  body?: UpdateClientCommand;
}

/**
 * Optional Parameters.
 */
export interface APIImportMethodOptionalParams extends msRest.RequestOptionsBase {
  file?: msRest.HttpRequestBody;
}

/**
 * Optional Parameters.
 */
export interface APIGetProcessesOptionalParams extends msRest.RequestOptionsBase {
  filters?: string;
  sorts?: string;
  page?: number;
  pageSize?: number;
}

/**
 * Optional Parameters.
 */
export interface APIGetRepresentativesOptionalParams extends msRest.RequestOptionsBase {
  filters?: string;
  sorts?: string;
  page?: number;
  pageSize?: number;
}

/**
 * Optional Parameters.
 */
export interface APICreate1OptionalParams extends msRest.RequestOptionsBase {
  body?: CreateRepresentativeCommand;
}

/**
 * Optional Parameters.
 */
export interface APIUpdate1OptionalParams extends msRest.RequestOptionsBase {
  body?: UpdateRepresentativeCommand;
}

/**
 * Optional Parameters.
 */
export interface APIImport1OptionalParams extends msRest.RequestOptionsBase {
  file?: msRest.HttpRequestBody;
}

/**
 * Optional Parameters.
 */
export interface APIAuthenticateOptionalParams extends msRest.RequestOptionsBase {
  body?: AuthenticateDto;
}

/**
 * Contains response data for the getClientById operation.
 */
export type GetClientByIdResponse = ClientDto & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ClientDto;
    };
};

/**
 * Contains response data for the getClients operation.
 */
export type GetClientsResponse = ClientDtoPagedResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ClientDtoPagedResult;
    };
};

/**
 * Contains response data for the create operation.
 */
export type CreateResponse = {
  /**
   * The parsed response body.
   */
  body: string;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: string;
    };
};

/**
 * Contains response data for the update operation.
 */
export type UpdateResponse = {
  /**
   * The parsed response body.
   */
  body: string;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: string;
    };
};

/**
 * Contains response data for the getProcessById operation.
 */
export type GetProcessByIdResponse = ProcessDto & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProcessDto;
    };
};

/**
 * Contains response data for the getProcesses operation.
 */
export type GetProcessesResponse = ProcessDtoPagedResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ProcessDtoPagedResult;
    };
};

/**
 * Contains response data for the getRepresentativeById operation.
 */
export type GetRepresentativeByIdResponse = RepresentativeDto & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RepresentativeDto;
    };
};

/**
 * Contains response data for the getRepresentatives operation.
 */
export type GetRepresentativesResponse = RepresentativeDtoPagedResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: RepresentativeDtoPagedResult;
    };
};

/**
 * Contains response data for the create1 operation.
 */
export type Create1Response = {
  /**
   * The parsed response body.
   */
  body: string;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: string;
    };
};

/**
 * Contains response data for the update1 operation.
 */
export type Update1Response = {
  /**
   * The parsed response body.
   */
  body: string;

  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: string;
    };
};
