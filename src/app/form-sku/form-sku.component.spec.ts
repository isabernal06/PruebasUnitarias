import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormSkuComponent } from './form-sku.component';
import { By } from '@angular/platform-browser';

describe('FormSkuComponent', () => {
  let component: FormSkuComponent;
  let fixture: ComponentFixture<FormSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormSkuComponent],
      imports: [ReactiveFormsModule, FormsModule]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be skuForm create', () => {
    expect(component.skuForm).toBeTruthy();
  });

  it('should be skuField create', () => {
    expect(component.skuField).toBeTruthy();
  });

  it('should be skuNameField create', () => {
    expect(component.skuNameField).toBeTruthy();
  });

  describe('test for skuField', () => {

    it('should not show an error: invalidSku', () => {
      component.skuField.setValue('123gdfgdf');
      expect(component.skuField.valid).toBeTruthy();
    });

    it('should show an error: invalidSku', () => {
      component.skuField.setValue('dfgreg54645');
      expect(component.skuField.invalid).toBeTruthy();
      expect(component.skuField.getError('invalidSku')).toBeTruthy();
    });

    it('should show an error: required', () => {
      component.skuField.setValue('');
      expect(component.skuField.invalid).toBeTruthy();
      expect(component.skuField.getError('required')).toBeTruthy();
    });

    it('should show an error in template: invalidSku', async(() => {
      // Arrange
      const input = fixture.debugElement.query(By.css('input#skuInput')).nativeElement;
      // Act
      input.value = '5657567';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable()
        .then(() => {
          // Assert
          const msgs = fixture.nativeElement.querySelectorAll('.ui.message');
          expect(msgs.length).toEqual(1);
          expect(msgs[0].innerHTML).toContain('SKU is invalid');
        });
    }));

    it('should show an error in template: invalidSku', async(() => {
      // Arrange
      const input = fixture.debugElement.query(By.css('input#skuInput')).nativeElement;
      // Act
      input.value = '';
      input.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable()
        .then(() => {
          // Assert
          const msgs = fixture.nativeElement.querySelectorAll('.ui.message');
          expect(msgs.length).toEqual(1);
          expect(msgs[0].innerHTML).toContain('SKU is required');
        });
    }));

  });

});
