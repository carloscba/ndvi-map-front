import { NdviMapFrontPage } from './app.po';

describe('ndvi-map-front App', function() {
  let page: NdviMapFrontPage;

  beforeEach(() => {
    page = new NdviMapFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
