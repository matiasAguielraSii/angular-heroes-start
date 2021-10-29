import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPollComponent } from './modal-poll.component';

describe('ModalPollComponent', () => {
  let component: ModalPollComponent;
  let fixture: ComponentFixture<ModalPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test toggle_modal function',() => {
    spyOn(component,'toggle_modal').and.callThrough();
    component.toggle_modal();
    expect(component.toggle_modal).toHaveBeenCalled();
    expect(component.show_modal).toBeTruthy();
  })

  it('should test send_team function',() => {
    spyOn(component,'send_team').and.callThrough();
    component.send_team('violeta');
    expect(component.send_team).toHaveBeenCalled();
    expect(component.show_modal).toBeTruthy();
  })
});
