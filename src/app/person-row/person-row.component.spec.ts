import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PersonRowComponent } from './person-row.component';
import { Persona } from './../persona';

describe('PersonRowComponent', () => {
  let component: PersonRowComponent;
  let fixture: ComponentFixture<PersonRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PersonRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRowComponent);
    component = fixture.componentInstance;

    component.persona = new Persona(
      'Isabel',
      'Bernal',
      33,
      49,
      160
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the name be Isabel ', () => {
    expect(component.persona.name).toEqual('Isabel');
  });

  it('should the age be 33 ', () => {
    expect(component.persona.age).toEqual(33);
  });

  it('should the name be "Isabel" in template', () => {
    //Arrange
    let de = fixture.debugElement.query(By.css('h1'));
    let element = de.nativeElement;
    //Assert
    fixture.detectChanges();
    expect(element.textContent).toEqual('Isabel');
  });

  it('should the age be 33 in template', () => {
    //Arrange
    let de = fixture.debugElement.query(By.css('.person-age'));
    let element = de.nativeElement;
    //Assert
    fixture.detectChanges();
    expect(element.textContent).toEqual('33');
  });


});
