import { RealEstateConsolePage } from './app.po';

describe('real-estate-console App', function() {
  let page: RealEstateConsolePage;

  beforeEach(() => {
    page = new RealEstateConsolePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
