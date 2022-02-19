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
      identifier: {
        serializedName: "identifier",
        type: {
          name: "String"
        }
      },
      companyName: {
        serializedName: "companyName",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      surname: {
        serializedName: "surname",
        type: {
          name: "String"
        }
      },
      street: {
        serializedName: "street",
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      place: {
        serializedName: "place",
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "postalCode",
        type: {
          name: "String"
        }
      },
      voivodeship: {
        serializedName: "voivodeship",
        type: {
          name: "String"
        }
      },
      district: {
        serializedName: "district",
        type: {
          name: "String"
        }
      },
      mail: {
        serializedName: "mail",
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      comments: {
        serializedName: "comments",
        type: {
          name: "String"
        }
      },
      clientType: {
        serializedName: "clientType",
        type: {
          name: "Number"
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
      companyName: {
        serializedName: "companyName",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      surname: {
        serializedName: "surname",
        type: {
          name: "String"
        }
      },
      street: {
        serializedName: "street",
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      place: {
        serializedName: "place",
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "postalCode",
        type: {
          name: "String"
        }
      },
      voivodeship: {
        serializedName: "voivodeship",
        type: {
          name: "String"
        }
      },
      district: {
        serializedName: "district",
        type: {
          name: "String"
        }
      },
      mail: {
        serializedName: "mail",
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      comments: {
        serializedName: "comments",
        type: {
          name: "String"
        }
      },
      clientType: {
        serializedName: "clientType",
        type: {
          name: "Number"
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
      companyName: {
        serializedName: "companyName",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      surname: {
        serializedName: "surname",
        type: {
          name: "String"
        }
      },
      street: {
        serializedName: "street",
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      place: {
        serializedName: "place",
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "postalCode",
        type: {
          name: "String"
        }
      },
      voivodeship: {
        serializedName: "voivodeship",
        type: {
          name: "String"
        }
      },
      district: {
        serializedName: "district",
        type: {
          name: "String"
        }
      },
      mail: {
        serializedName: "mail",
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      comments: {
        serializedName: "comments",
        type: {
          name: "String"
        }
      },
      clientType: {
        serializedName: "clientType",
        type: {
          name: "Number"
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
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      surname: {
        serializedName: "surname",
        type: {
          name: "String"
        }
      },
      street: {
        serializedName: "street",
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "postalCode",
        type: {
          name: "String"
        }
      },
      place: {
        serializedName: "place",
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      voivodeship: {
        serializedName: "voivodeship",
        type: {
          name: "String"
        }
      },
      district: {
        serializedName: "district",
        type: {
          name: "String"
        }
      },
      mail: {
        serializedName: "mail",
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      comments: {
        serializedName: "comments",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RepresentativeDtoPagedResult: msRest.CompositeMapper = {
  serializedName: "RepresentativeDtoPagedResult",
  type: {
    name: "Composite",
    className: "RepresentativeDtoPagedResult",
    modelProperties: {
      results: {
        serializedName: "results",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RepresentativeDto"
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

export const CreateRepresentativeCommand: msRest.CompositeMapper = {
  serializedName: "CreateRepresentativeCommand",
  type: {
    name: "Composite",
    className: "CreateRepresentativeCommand",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      surname: {
        serializedName: "surname",
        type: {
          name: "String"
        }
      },
      street: {
        serializedName: "street",
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "postalCode",
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      place: {
        serializedName: "place",
        type: {
          name: "String"
        }
      },
      voivodeship: {
        serializedName: "voivodeship",
        type: {
          name: "String"
        }
      },
      district: {
        serializedName: "district",
        type: {
          name: "String"
        }
      },
      mail: {
        serializedName: "mail",
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      comments: {
        serializedName: "comments",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const UpdateRepresentativeCommand: msRest.CompositeMapper = {
  serializedName: "UpdateRepresentativeCommand",
  type: {
    name: "Composite",
    className: "UpdateRepresentativeCommand",
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
      },
      surname: {
        serializedName: "surname",
        type: {
          name: "String"
        }
      },
      street: {
        serializedName: "street",
        type: {
          name: "String"
        }
      },
      address: {
        serializedName: "address",
        type: {
          name: "String"
        }
      },
      postalCode: {
        serializedName: "postalCode",
        type: {
          name: "String"
        }
      },
      place: {
        serializedName: "place",
        type: {
          name: "String"
        }
      },
      voivodeship: {
        serializedName: "voivodeship",
        type: {
          name: "String"
        }
      },
      district: {
        serializedName: "district",
        type: {
          name: "String"
        }
      },
      mail: {
        serializedName: "mail",
        type: {
          name: "String"
        }
      },
      phoneNumber: {
        serializedName: "phoneNumber",
        type: {
          name: "String"
        }
      },
      comments: {
        serializedName: "comments",
        type: {
          name: "String"
        }
      }
    }
  }
};
