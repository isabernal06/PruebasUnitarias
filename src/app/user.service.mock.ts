import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { User } from './user';

export class MockUsersService {
  getAllUsers(): Observable<User[]> {
    return of([
      new User('Valentina', 'vale@gmail.com', '34534535'),
      new User('Ana', 'ana@gmail.com', '34534535'),
      new User('Juan', 'juan@gmail.com', '34534535'),
    ]);
  }
}
