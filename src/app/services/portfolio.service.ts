import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Project } from '../interfaces/project-interface';
import { catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // fetch projects from github repos api
  gitHubReposApi = "https://api.github.com/users/ike-njoku/repos"

  constructor(private http: HttpClient) { }

  getGithubRepos(): Observable<Project[]>{
    // fetching
    return this.http.get<Project[]>(this.gitHubReposApi).pipe(
      catchError(
        // handle http Errors
        this.handleHttpError
      )
    )
  }

  handleHttpError(error){
    // throw an error if http Processes fail
    return throwError(error.message || "Could not Reach Server" )
  }
  
}
