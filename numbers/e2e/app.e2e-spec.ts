import { NumbersPage } from './app.po';

describe('numbers App', () => {
  let page: NumbersPage;

  beforeEach(() => {
    page = new NumbersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
