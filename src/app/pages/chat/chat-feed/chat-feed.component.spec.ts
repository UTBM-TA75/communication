import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFeedComponent } from './chat-feed.component';

describe('DiscussionComponent', () => {
  let component: ChatFeedComponent;
  let fixture: ComponentFixture<ChatFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatFeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
