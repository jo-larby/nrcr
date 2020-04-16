import { browser, by, element } from "protractor";

export class dashboardPage {
  navigateTo() {
    return browser.get(browser.baseUrl + "dashboard") as Promise<any>;
  }

  getTitleText() {
    return element(by.css("#title h2")).getText() as Promise<string>;
  }
}
