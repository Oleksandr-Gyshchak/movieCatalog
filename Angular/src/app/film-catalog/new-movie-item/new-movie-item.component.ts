import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FilmService } from 'src/app/shared/services/services/film.service';
import { FilmApiService } from 'src/app/shared/services/services/film.api.service';
import { MessagesService } from 'src/app/shared/services/messages.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-new-movie-item',
  templateUrl: './new-movie-item.component.html',
  styleUrls: ['./new-movie-item.component.css']
})
export class NewMovieItemComponent implements OnInit {


  filmForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public filmApiService: FilmApiService,
    private msgService: MessagesService,
    public router: Router
  ) { }

  ngOnInit() {
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.filmForm = this.formBuilder.group({
      title: [''],
      releaseYear: [''],
      format: ['']
    });


  }

  sendData() {
    const formValues = this.filmForm.value;
    console.log(formValues);

    const filmObj = {
      title: formValues.title,
      releaseYear: formValues.releaseYear,
      format: formValues.format
    };

    this.filmApiService.addMovietoDB(filmObj).subscribe(
      (data: any) => {

        this.msgService.setMessage({
          type: 'success',
          body: `Фильм успешно Создан`
        });
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      (err: HttpErrorResponse) => {
        console.log(err)
        this.msgService.setMessage({
          type: 'danger',
          body: err.error.error || 'Ошибка'
        });

      }
    );

  }


}
