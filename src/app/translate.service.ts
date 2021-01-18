import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  url =
    'https://google-translate1.p.rapidapi.com/language/translate/v2';

  constructor(private http: HttpClient) {}

  translate(text: string) {
    var data = new URLSearchParams({
      q: text,
      target: 'es'
    });
    return this.http
      .post(
        this.url,
        data.toString(),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-Rapidapi-Key': '',
            'X-Rapidapi-Host': 'google-translate1.p.rapidapi.com',
            'Host': 'google-translate1.p.rapidapi.com'
          },
        }
      )
      .pipe(
        map((res: any) => {
          return res.data.translations[0].translatedText;
        })
      );
  }
}
