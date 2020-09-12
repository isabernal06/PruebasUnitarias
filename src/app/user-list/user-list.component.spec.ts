import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserRowComponent } from '../user-row/user-row.component';
import { By } from '@angular/platform-browser';
import { UsersService } from '../users.service';
import { MockUsersService } from '../user.service.mock';



describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent, UserRowComponent],
      providers: [
        { provide: UsersService, useClass: MockUsersService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component.users);
    expect(component).toBeTruthy();
  });

  it('should selectedUser be firth item the array', () => {
    expect(component.selectedUser.name).toEqual('Valentina');
  });


  it('show have an app-user-row', () => {
    const de = fixture.debugElement.query(By.css('app-user-row'));
    expect(de).toBeTruthy();
  });

  it('should raise selected even when clicked', () => {
    // Arrange
    const button = fixture.debugElement.query(By.css('app-user-row .btn-selected'));
    button.triggerEventHandler('click', null);

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.selectedUser.name).toBe('Valentina');
  });


});
