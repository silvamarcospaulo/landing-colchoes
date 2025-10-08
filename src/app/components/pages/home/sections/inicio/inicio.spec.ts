import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSeo } from './inicio';

describe('VideoSeo', () => {
  let component: VideoSeo;
  let fixture: ComponentFixture<VideoSeo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoSeo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoSeo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
