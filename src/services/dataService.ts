import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { WeddingData } from "src/models/weddingData";

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  loadData(): Observable<WeddingData> {
    return this.http.get<WeddingData>('assets/info.json');
  }
}