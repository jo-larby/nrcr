import { browser, by, element, ElementFinder } from "protractor";

export class CarsAndSetupPage {
  navigateTo() {
    return browser.get(browser.baseUrl + "cars-and-setup") as Promise<any>;
  }

  getPhillsTextHeader() {
    return element(by.css("#phills-text h3")).getText() as Promise<string>;
  }

  getPhillsLogo() {
    return element(by.css("#phills-logo")) as ElementFinder;
  }

  getPhillsLink() {
    return element(by.css("#phills-model-link")) as ElementFinder;
  }
}
