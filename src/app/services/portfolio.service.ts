import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Project } from '../interfaces/project-interface';
import { catchError} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  // CV apiUrl (parameter in the google Docs api)
  DocumentId = '1fVbtbaNQyqrf5mGzy7CiXMMu2Tf-mBAa01gYhwAEg3Q';
  
  // api search (url excluding the parameter )
  googleDocsApi = 'https://docs.googleapis.com/v1/documents/';
  
  
  // gitHubReposApi URl
  private readonly gitHubReposApiUrl = environment.gitHubApiUrl;

  constructor(private http: HttpClient) { }

  // get CV from google docs so that it can be displayed
  getCurriculumVitae(): Observable<[]>{
    return this.http.get<[]>(`${this.googleDocsApi}+${this.DocumentId}`).pipe(
      // handle errors 
      catchError(this.handleHttpErrors)
    );
  }

  getGitHubRepos(): Observable<Project[]>{
    console.log(environment)
    return this.http.get<Project[]>(this.gitHubReposApiUrl).pipe(
      // handle errors
      catchError(this.handleHttpErrors)
    )
  }

  handleHttpErrors(error){
    return throwError(error.message || "Can't retrieve data from the server at this time ")
  }
}
