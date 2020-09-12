import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserRowComponent } from './user-row.component';
import { User } from './../user';
import { Button } from 'protractor';



describe('UserRowComponent', () => {
  let component: UserRowComponent;
  let fixture: ComponentFixture<UserRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserRowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRowComponent);
    component = fixture.componentInstance;
    component.user = new User('Nicolas', 'nico@gmail.com', 'asfsf');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should the name be Nicolas', () => {
    expect(component.user.name).toEqual('Nicolas');
  });

  it('should the name be Andrea when i change the model in template', () => {
    // Arrange
    const de = fixture.debugElement.query(By.css('h5'));
    const element = de.nativeElement;

    // Act
    component.user.name = 'Andrea';
    fixture.detectChanges();

    // Assert
    expect(element.textContent).toEqual('Andrea');
  });

  it('should show the email when i clicked in button', () => {
    // Arrange
    const button = fixture.debugElement.query(By.css('.btn-show-email'));
    const de = fixture.debugElement.query(By.css('.user-email'));
    const el = de.nativeElement;
    button.triggerEventHandler('click', null);

    // Act
    fixture.detectChanges();

    // Assert
    expect(el.textContent).toEqual('nico@gmail.com');
  });

  it('should raise selected even when clicked', () => {
    // Arrange
    let selectedUser: User;
    component.onSelected.subscribe((user: User) => {
      selectedUser = user;
    });
    const button = fixture.debugElement.query(By.css('.btn-selected'));
    button.triggerEventHandler('click', null);

    // Act
    fixture.detectChanges();

    // Assert
    expect(selectedUser.name).toEqual('Nicolas');
  });



});
