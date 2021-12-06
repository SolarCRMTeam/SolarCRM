import { ServiceClientCredentials } from "@azure/ms-rest-js";
import { API } from "./aPI";

export class NoCredentials implements ServiceClientCredentials {
  signRequest(
    webResource: import("@azure/ms-rest-js").WebResource
  ): Promise<import("@azure/ms-rest-js").WebResource> {
    return Promise.resolve(webResource);
  }
}

export function getAPI(): Promise<API> {
  return Promise.resolve(new API(new NoCredentials()));
}
