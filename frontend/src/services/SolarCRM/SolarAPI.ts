import {
  BasicAuthenticationCredentials,
  ServiceClientCredentials,
} from "@azure/ms-rest-js";
import { userStore } from "../../stores/UserStore";
import { API } from "./aPI";

export class NoCredentials implements ServiceClientCredentials {
  signRequest(
    webResource: import("@azure/ms-rest-js").WebResource
  ): Promise<import("@azure/ms-rest-js").WebResource> {
    return Promise.resolve(webResource);
  }
}

export function getUnauthorizedAPI(): Promise<API> {
  return Promise.resolve(new API(new NoCredentials()));
}

export function getAPI(): Promise<API> {
  if (userStore.login !== undefined && userStore.password !== undefined) {
    const credentials = new BasicAuthenticationCredentials(
      userStore.login,
      userStore.password
    );
    return Promise.resolve(new API(credentials));
  } else {
    return getUnauthorizedAPI();
  }
}
