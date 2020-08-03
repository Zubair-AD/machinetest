import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemprogressComponent } from './itemprogress.component';

describe('ItemprogressComponent', () => {
  let component: ItemprogressComponent;
  let fixture: ComponentFixture<ItemprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
