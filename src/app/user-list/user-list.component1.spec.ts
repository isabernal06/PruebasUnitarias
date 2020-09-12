import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from '../user';

import { UserListComponent } from './user-list.component';
import { UserRowComponent } from '../user-row/user-row.component';
import { UsersService } from '../users.service';


describe('UserListComponent1', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let usersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserListComponent, UserRowComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: UsersService, useClass: UsersService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    usersService = fixture.debugElement.injector.get(UsersService);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call getAllUsers', () => {
    // Arrange
    const mockUsers = of([
      new User('Valentina', 'vale@gmail.com', '34534535'),
      new User('Ana', 'ana@gmail.com', '34534535'),
      new User('Juan', 'juan@gmail.com', '34534535'),
    ]);
    spyOn(usersService, 'getAllUsers').and.returnValue(mockUsers);

    // Act
    fixture.detectChanges();

    // Assert
    expect(component.users.length).toEqual(3);
    expect(usersService.getAllUsers).toHaveBeenCalled();
    expect(usersService.getAllUsers).toHaveBeenCalledTimes(1);
  });

});
