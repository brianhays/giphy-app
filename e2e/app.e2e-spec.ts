import { GiphyAppPage } from './app.po';

describe('giphy-app App', () => {
  let page: GiphyAppPage;

  beforeEach(() => {
    page = new GiphyAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
