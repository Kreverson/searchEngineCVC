import { CVCPage } from './app.po';

describe('cvc App', () => {
  let page: CVCPage;

  beforeEach(() => {
    page = new CVCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
