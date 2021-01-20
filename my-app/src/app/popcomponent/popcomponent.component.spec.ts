import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopcomponentComponent } from './popcomponent.component';

describe('PopcomponentComponent', () => {
  let component: PopcomponentComponent;
  let fixture: ComponentFixture<PopcomponentComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PopcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
