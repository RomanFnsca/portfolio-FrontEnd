import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class SExperienceService {
  xpURL = 'http://localhost:8080/experience/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.xpURL + 'list');
  }

  public getExperience(): Observable<Experience> {
    return this.httpClient.get<Experience>(this.xpURL + 'traer/perfil');
  }

  public detail(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(this.xpURL + `detail/${id}`);
  }
  
  public save(experience: Experience): Observable<any>{
    return this.httpClient.post<any>(this.xpURL+'create', experience);
  }
  

  public update(id: number, experience: Experience): Observable<any> {
    return this.httpClient.put<any>(this.xpURL + `update/${id}`, experience);
  }

  
  public delete(id:number): Observable<any>{
    return this. httpClient.delete<any>(this.xpURL+`delete/${id}`);
  }
  
}
