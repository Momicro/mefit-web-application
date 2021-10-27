import { HttpHeaders } from "@angular/common/http";

export const environment = {
  production: true,
  apiBaseUrl: 'https://experis-mefit-springboot.herokuapp.com',
  keycloak: {
    url: 'http://de-mefit-keycloak.germanywestcentral.azurecontainer.io:8080/auth/',
    realm: 'MeFit',
    client: 'MeFit'
  },
  httpOptions: {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }
};
