import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have header', () => {
    page.navigateTo();
    expect(page.getAppHeader()).toBeTruthy();
  });

  it('should have body', () => {
    page.navigateTo();
    expect(page.getAppBody()).toBeTruthy();
  });

  it('should have background cover', () => {
    page.navigateTo();
    expect(page.getBackgroundCover()).toBeTruthy();
  });
});
