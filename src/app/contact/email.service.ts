import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface EmailFormat {
  name: string,
  email: string,
  subject: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(email: EmailFormat): Observable<any> {
    return this.http.post<any>('http://localhost:2002/send-mail', email)
      .pipe(
        (retry(1)),
        (catchError(this.onError))
      );
  }

  onError(error: any) {
    return throwError(error || 'Could not Send Email at this time');
  }
}
