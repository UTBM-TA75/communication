import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagerieWindowComponent } from './messagerie-window.component';

describe('MessagerieWindowComponent', () => {
  let component: MessagerieWindowComponent;
  let fixture: ComponentFixture<MessagerieWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagerieWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagerieWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
