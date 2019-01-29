import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmlistImportComponent } from './filmlist-import.component';

describe('FilmlistImportComponent', () => {
  let component: FilmlistImportComponent;
  let fixture: ComponentFixture<FilmlistImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmlistImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmlistImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
