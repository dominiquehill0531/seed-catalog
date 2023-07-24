import { Layer } from './layer';
import { Plant } from './plant';

describe('Plant', () => {

  it('should create an instance', () => {
    expect(new Plant("Black Walnut", Layer.CANOPY)).toBeTruthy();
  });


});
