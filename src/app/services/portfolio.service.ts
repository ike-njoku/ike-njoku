import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Project } from '../interfaces/project-interface';
import { catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  // gitHubReposApi URl
  private readonly gitHubReposApiUrl = 'https://api.github.com/users/ike-njoku/repos'

  constructor(private http: HttpClient) { }

  getGitHubRepos(): Observable<Project[]>{
    return this.http.get<Project[]>(this.gitHubReposApiUrl).pipe(
      // handle errors
      catchError(this.handleHttpErrors)
    )
  }

  handleHttpErrors(error){
    return throwError(error.message || "Can't retrieve data from the server at this time ")
  }
}
