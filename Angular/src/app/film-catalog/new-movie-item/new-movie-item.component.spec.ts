import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieItemComponent } from './new-movie-item.component';

describe('NewMovieItemComponent', () => {
  let component: NewMovieItemComponent;
  let fixture: ComponentFixture<NewMovieItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMovieItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMovieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
