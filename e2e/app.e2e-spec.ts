import { Ng2PostsPage } from './app.po';

describe('ng2-posts App', function() {
  let page: Ng2PostsPage;

  beforeEach(() => {
    page = new Ng2PostsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
