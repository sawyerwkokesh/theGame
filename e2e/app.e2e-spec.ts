import { TheGamePage } from './app.po';

describe('the-game App', function() {
  let page: TheGamePage;

  beforeEach(() => {
    page = new TheGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
