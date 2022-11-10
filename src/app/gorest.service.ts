import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GorestService {
  baseUrl = 'https://gorest.co.in/public/v2';
  http = inject(HttpClient);
  private bearKey = "";

  reportError(error: any) {
    alert("Network Error");
    console.error("Network Error", error);
  }

  get(url: string) {
    try {
      return this.http.get(this.baseUrl + url);
    } catch (error) { this.reportError(error); return null; }
  }

  post(url: string, body: any) {
    try {
      return this.http.post(this.baseUrl + url, body, {
        headers: { Authorization: "Bearer " + this.bearKey }
      })
    } catch (error) { this.reportError(error); return null; }
  }

  put(url: string, body: any) {
    try {
      return this.http.put(this.baseUrl + url, body, {
        headers: { Authorization: "Bearer " + this.bearKey }
      })
    } catch (error) { this.reportError(error); return null; }
  }


  /**
   * Deletes User. USE WITH CAUTION
   *
   * @param {string} url
   * @return {*}
   * @memberof GorestService
   */
  delete(url: string) {
    try {
      return this.http.delete(this.baseUrl + url, {
        headers: { Authorization: "Bearer " + this.bearKey }
      })
    } catch (error) { this.reportError(error); return null; }
  }
}
