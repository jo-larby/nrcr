import { browser, by, element } from "protractor";

export class dashboardPage {
  navigateTo() {
    return browser.get(browser.baseUrl + "") as Promise<any>;
  }

  getTitleText() {
    return element(by.css("#title-text h2")).getText() as Promise<string>;
  }

  getAnnouncementText() {
    return element(by.css("#announcement-header h2")).getText() as Promise<
      string
    >;
  }
}
