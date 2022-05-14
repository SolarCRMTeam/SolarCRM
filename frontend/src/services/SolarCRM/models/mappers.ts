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

export const EventDto: msRest.CompositeMapper = {
  serializedName: "EventDto",
  type: {
    name: "Composite",
    className: "EventDto",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      eventType: {
        serializedName: "eventType",
        type: {
          name: "Number"
        }
      },
      created: {
        serializedName: "created",
        type: {
          name: "DateTime"
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

export const CreateEventCommand: msRest.CompositeMapper = {
  serializedName: "CreateEventCommand",
  type: {
    name: "Composite",
    className: "CreateEventCommand",
    modelProperties: {
      processId: {
        serializedName: "processId",
        type: {
          name: "Uuid"
        }
      },
      eventType: {
        serializedName: "eventType",
        type: {
          name: "Number"
        }
      },
      processKind: {
        serializedName: "processKind",
        type: {
          name: "Number"
        }
      },
      meeting: {
        serializedName: "meeting",
        type: {
          name: "Number"
        }
      },
      meetingDate: {
        serializedName: "meetingDate",
        type: {
          name: "DateTime"
        }
      },
      contractValue: {
        nullable: true,
        serializedName: "contractValue",
        type: {
          name: "Number"
        }
      },
      installationSize: {
        nullable: true,
        serializedName: "installationSize",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ProcessDto: msRest.CompositeMapper = {
  serializedName: "ProcessDto",
  type: {
    name: "Composite",
    className: "ProcessDto",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Uuid"
        }
      },
      created: {
        serializedName: "created",
        type: {
          name: "DateTime"
        }
      },
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      updated: {
        serializedName: "updated",
        type: {
          name: "DateTime"
        }
      },
      identifier: {
        serializedName: "identifier",
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
      kind: {
        serializedName: "kind",
        type: {
          name: "Number"
        }
      },
      meeting: {
        serializedName: "meeting",
        type: {
          name: "Number"
        }
      },
      offerValue: {
        nullable: true,
        serializedName: "offerValue",
        type: {
          name: "Number"
        }
      },
      installationSize: {
        nullable: true,
        serializedName: "installationSize",
        type: {
          name: "Number"
        }
      },
      advance: {
        nullable: true,
        serializedName: "advance",
        type: {
          name: "Number"
        }
      },
      audit: {
        serializedName: "audit",
        type: {
          name: "Number"
        }
      },
      projectAccepted: {
        nullable: true,
        serializedName: "projectAccepted",
        type: {
          name: "Boolean"
        }
      },
      assembly: {
        nullable: true,
        serializedName: "assembly",
        type: {
          name: "Boolean"
        }
      },
      operatorRequest: {
        serializedName: "operatorRequest",
        type: {
          name: "Number"
        }
      },
      finalInvoice: {
        serializedName: "finalInvoice",
        type: {
          name: "String"
        }
      },
      finalBilling: {
        serializedName: "finalBilling",
        type: {
          name: "DateTime"
        }
      },
      application: {
        nullable: true,
        serializedName: "application",
        type: {
          name: "Boolean"
        }
      },
      clientNumber: {
        serializedName: "clientNumber",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProcessDtoPagedResult: msRest.CompositeMapper = {
  serializedName: "ProcessDtoPagedResult",
  type: {
    name: "Composite",
    className: "ProcessDtoPagedResult",
    modelProperties: {
      results: {
        serializedName: "results",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProcessDto"
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

export const CreateProcessCommand: msRest.CompositeMapper = {
  serializedName: "CreateProcessCommand",
  type: {
    name: "Composite",
    className: "CreateProcessCommand",
    modelProperties: {
      clientId: {
        serializedName: "clientId",
        type: {
          name: "Uuid"
        }
      },
      kind: {
        serializedName: "kind",
        type: {
          name: "Number"
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

export const AuthenticateDto: msRest.CompositeMapper = {
  serializedName: "AuthenticateDto",
  type: {
    name: "Composite",
    className: "AuthenticateDto",
    modelProperties: {
      login: {
        serializedName: "login",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      }
    }
  }
};
