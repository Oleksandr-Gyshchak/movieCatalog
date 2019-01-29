import { Component, OnInit } from '@angular/core';
import { FilmApiService } from 'src/app/shared/services/services/film.api.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filmlist-import',
  templateUrl: './filmlist-import.component.html',
  styleUrls: ['./filmlist-import.component.css']
})
export class FilmlistImportComponent implements OnInit {

  constructor(
    public filmApiService: FilmApiService,
    private msgService: MessagesService,
    public router: Router
  ) { }

  ngOnInit() {
  }



  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);

      this.filmApiService.sendFileToServer(file).subscribe(
        (data: any) => {

          this.msgService.setMessage({
            type: 'success',
            body: `Фильмы успешно импорированы`
          });
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        },
        (err: HttpErrorResponse) => {
          this.msgService.setMessage({
            type: 'danger',
            body: err.error.error || 'Ошибка'
          });

        }
      );


    }
  }

}
