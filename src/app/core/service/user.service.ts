import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:5000'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  onSubmit(obj:any): Observable<any> {
    //const body = { email: username, password };
    return this.http.post(`${this.apiUrl}/loginUser`, obj);
  }

}
