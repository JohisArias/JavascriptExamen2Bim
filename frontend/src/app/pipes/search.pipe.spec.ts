// Tutorial: https://medium.com/@asfo/desarrollando-un-filtro-de-búsqueda-para-angular-4-5-146dc9efdfcb

import { SearchPipe } from './search.pipe';

describe('SearchPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });
});
