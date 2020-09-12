import { MyValidators } from './validators';
import { FormControl } from '@angular/forms';

describe('test for validators', () => {

  describe('test for skuValidate', () => {

    it('should return null for 1234', () => {
      const formControl = new FormControl();
      formControl.setValue('1234');
      const rta = MyValidators.skuValidate(formControl);
      expect(rta).toBeNull();
    });

    it('should return null for " "', () => {
      const formControl = new FormControl();
      formControl.setValue('');
      const rta = MyValidators.skuValidate(formControl);
      expect(rta).toBeNull();
    });

    it('should return an error for 67568', () => {
      const formControl = new FormControl();
      formControl.setValue('67568');
      const rta = MyValidators.skuValidate(formControl);
      expect(rta.invalidSku).toBeTruthy();
    });
  });


});
