import { Layer } from './layer';
import { Plant } from './plant';
import { Seed } from './seed';

describe('Seed', () => {

  it('should create an instance', () => {
    expect(new Seed(new Plant(), "N/A", 4)).toBeTruthy();
  });
  
});
