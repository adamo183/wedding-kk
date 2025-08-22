import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from "rxjs";
import { WeddingData } from "src/models/weddingData";

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}
  private endpointUrl = 'https://getweddingdata-5pdxbmxr2q-uc.a.run.app';
  private localFile = 'data/info.json';

  loadData(): Observable<WeddingData> {
    return this.http.get<WeddingData>(this.endpointUrl).pipe(
      catchError(err => {
        return this.http.get<WeddingData>(this.localFile);
      })
    );
  }
}