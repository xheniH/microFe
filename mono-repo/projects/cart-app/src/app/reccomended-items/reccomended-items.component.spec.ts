import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReccomendedItemsComponent } from './reccomended-items.component';

describe('ReccomendedItemsComponent', () => {
  let component: ReccomendedItemsComponent;
  let fixture: ComponentFixture<ReccomendedItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReccomendedItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReccomendedItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
