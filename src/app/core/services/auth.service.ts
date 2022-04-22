import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiEndpointsConstants } from "../constants";
import { ApiEndpointHelper } from "../helpers/api-endpoint.helper";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) { }

  signIn(model: any): Observable<any> {
    return this.httpClient.post<any>(
      ApiEndpointHelper.get(ApiEndpointsConstants.AUTH_SIGN_IN), model
    );
  }

  forgotPassword(model: any): Observable<any> {
    return this.httpClient.post<any>(
      ApiEndpointHelper.get(ApiEndpointsConstants.AUTH_FORGOT_PASSWORD), model
    );
  }

  setNewPassword(model: any): Observable<any> {
    return this.httpClient.post<any>(
      ApiEndpointHelper.get(ApiEndpointsConstants.AUTH_SET_NEW_PASSWORD), model
    );
  }

  refreshToken(model: any): Observable<any> {
    return this.httpClient.post<any>(
      ApiEndpointHelper.get(ApiEndpointsConstants.AUTH_REFRESH_TOKEN), model
    );
  }

  signUp(model: any): Observable<any> {
    return this.httpClient.post<any>(
      ApiEndpointHelper.get(ApiEndpointsConstants.AUTH_SIGN_UP), model
    );
  }
}
