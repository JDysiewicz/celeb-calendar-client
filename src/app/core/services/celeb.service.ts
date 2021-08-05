import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Celeb, ISOMonthDay } from 'src/app/types';

@Injectable({
  providedIn: 'root',
})
export class CelebService {
  constructor(private http: HttpClient) {}

  getAllCelebs() {
    return this.http
      .get<{ data: Celeb[] }>('http://127.0.0.1:4000/api/celebs')
      .pipe(map((response) => response.data));
  }

  getCelebsByMonthDayString(monthDayString: ISOMonthDay) {
    return this.http
      .get<{ data: Celeb[] }>('http://127.0.0.1:4000/api/celebs')
      .pipe(
        map((response) =>
          response.data.filter((celeb) =>
            celeb.birthday.includes(monthDayString)
          )
        )
      );
  }
}
