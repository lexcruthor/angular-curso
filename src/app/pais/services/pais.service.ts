import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1/';
  private apiUrlRegion: string = 'https://restcountries.com/v2/'
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url);

  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);

  }

  getPaisPorAlpha(id: string): Observable<Country[]> {

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country[]>(url);

  }
  buscarRegion(region: string):Observable<Country[]> {
    const url = `${this.apiUrlRegion}/regionalbloc/${region}?fields=name,capital,alpha2code,flag`;
    return this.http.get<Country[]>(url);
  }
}
