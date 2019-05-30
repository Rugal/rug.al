import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getAppBody() {
    return element(by.css('app-body')).isPresent();
  }

  getAppHeader() {
    return element(by.css('app-header')).isPresent();
  }

  getBackgroundCover() {
    return element(by.css('background-cover')).isPresent();
  }
}
