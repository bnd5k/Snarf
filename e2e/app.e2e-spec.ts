import { SnarfPage } from './app.po';

describe('snarf App', () => {
  let page: SnarfPage;

  beforeEach(() => {
    page = new SnarfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
