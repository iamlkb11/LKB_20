import { Assignment6Page } from './app.po';

describe('assignment6 App', () => {
  let page: Assignment6Page;

  beforeEach(() => {
    page = new Assignment6Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
