import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeService } from './filme-service';

describe('FilmeService', () => {
  let component: FilmeService;
  let fixture: ComponentFixture<FilmeService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmeService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmeService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
