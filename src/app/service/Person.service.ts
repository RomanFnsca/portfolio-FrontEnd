import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/Person.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  URL= environment.URL + 'person/'

  constructor(private httpClient:HttpClient) { }

  public getPerson(): Observable<Person>{
    return this.httpClient.get<Person>(this.URL+ 'traer/perfil');
  }

  public list(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(this.URL+'list');
  }

  public detail(id:number):Observable<Person>{
    return this.httpClient.get<Person>(this.URL +`detail/${id}`);
  }
  /*
  public save(education: Education): Observable<any>{
    return this.httpClient.post<any>(this.URL+'create', education);
  }
  */

  public update(id:number, person: Person):Observable<any>{
    return this.httpClient.put<any>(this.URL+`update/${id}`, person);
  }

  /*
  public delete(id:number): Observable<any>{
    return this. httpClient.delete<any>(this.URL+`delete/${id}`);
  }
  */
}
