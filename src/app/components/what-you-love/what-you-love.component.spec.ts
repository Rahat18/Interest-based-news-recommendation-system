import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatYouLoveComponent } from './what-you-love.component';

describe('WhatYouLoveComponent', () => {
  let component: WhatYouLoveComponent;
  let fixture: ComponentFixture<WhatYouLoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatYouLoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatYouLoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
