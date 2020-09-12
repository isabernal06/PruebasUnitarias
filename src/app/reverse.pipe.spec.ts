import { ReversePipe } from './reverse.pipe';

describe('ReversePipe', () => {
  it('create an instance', () => {
    const pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a Isabel en reverse', () => {
    const pipe = new ReversePipe();
    expect(pipe.transform('isabel')).toEqual('lebasi');
    expect(pipe.transform('ana')).toEqual('ana');
    expect(pipe.transform('juan')).toEqual('nauj');
    expect(pipe.transform('')).toEqual('');
  });
});
