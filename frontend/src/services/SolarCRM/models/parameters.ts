/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";

export const file: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "file"
  ],
  mapper: {
    serializedName: "File",
    type: {
      name: "String"
    }
  }
};
export const filters: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "filters"
  ],
  mapper: {
    serializedName: "Filters",
    type: {
      name: "String"
    }
  }
};
export const id: msRest.OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    required: true,
    serializedName: "id",
    type: {
      name: "Uuid"
    }
  }
};
export const page: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "page"
  ],
  mapper: {
    serializedName: "Page",
    constraints: {
      InclusiveMaximum: 2147483647,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const pageSize: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "pageSize"
  ],
  mapper: {
    serializedName: "PageSize",
    constraints: {
      InclusiveMaximum: 2147483647,
      InclusiveMinimum: 1
    },
    type: {
      name: "Number"
    }
  }
};
export const sorts: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "sorts"
  ],
  mapper: {
    serializedName: "Sorts",
    type: {
      name: "String"
    }
  }
};
