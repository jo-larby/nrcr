import { CarsAndSetupPage } from "./cars-and-setup.po";
import { browser, logging } from "protractor";

describe("cars and setup page", () => {
  let page: CarsAndSetupPage;

  beforeEach(() => {
    page = new CarsAndSetupPage();
  });

  it("should display Phill's Text Header", () => {
    page.navigateTo();
    expect(page.getPhillsTextHeader()).toEqual("Phill's Models");
  });

  it("should display Phill's Logo", () => {
    page.navigateTo();
    expect(page.getPhillsLogo().isDisplayed()).toBe(true);
  });

  it("should navigate to Phills Models.com", () => {
    page.navigateTo();
    expect(page.getPhillsLink().getAttribute("href")).toEqual(
      "https://www.phillsmodels.com/"
    );
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
