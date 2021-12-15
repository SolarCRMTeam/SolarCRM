/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const ClientDto: msRest.CompositeMapper = {
  serializedName: "ClientDto",
  type: {
    name: "Composite",
    className: "ClientDto",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClientDtoPagedResult: msRest.CompositeMapper = {
  serializedName: "ClientDtoPagedResult",
  type: {
    name: "Composite",
    className: "ClientDtoPagedResult",
    modelProperties: {
      results: {
        serializedName: "results",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ClientDto"
            }
          }
        }
      },
      rowCount: {
        serializedName: "rowCount",
        type: {
          name: "Number"
        }
      },
      pageSize: {
        serializedName: "pageSize",
        type: {
          name: "Number"
        }
      },
      currentPage: {
        serializedName: "currentPage",
        type: {
          name: "Number"
        }
      },
      totalPagesNumber: {
        readOnly: true,
        serializedName: "totalPagesNumber",
        type: {
          name: "Number"
        }
      },
      hasPreviousPage: {
        readOnly: true,
        serializedName: "hasPreviousPage",
        type: {
          name: "Boolean"
        }
      },
      hasNextPage: {
        readOnly: true,
        serializedName: "hasNextPage",
        type: {
          name: "Boolean"
        }
      },
      firstRowOnPage: {
        readOnly: true,
        serializedName: "firstRowOnPage",
        type: {
          name: "Number"
        }
      },
      lastRowOnPage: {
        readOnly: true,
        serializedName: "lastRowOnPage",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const CreateClientCommand: msRest.CompositeMapper = {
  serializedName: "CreateClientCommand",
  type: {
    name: "Composite",
    className: "CreateClientCommand",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateClientCommand: msRest.CompositeMapper = {
  serializedName: "UpdateClientCommand",
  type: {
    name: "Composite",
    className: "UpdateClientCommand",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RepresentativeDto: msRest.CompositeMapper = {
  serializedName: "RepresentativeDto",
  type: {
    name: "Composite",
    className: "RepresentativeDto",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      }
    }
  }
};
