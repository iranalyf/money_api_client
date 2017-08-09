import { MoneyClientPage } from './app.po';

describe('money-client App', () => {
  let page: MoneyClientPage;

  beforeEach(() => {
    page = new MoneyClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
