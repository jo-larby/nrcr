import { dashboardPage } from "./dashboard.po";
import { browser, logging } from "protractor";

describe("dashboard App", () => {
  let page: dashboardPage;

  beforeEach(() => {
    page = new dashboardPage();
  });

  it("should display welcome message", () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual("NRCR app is running!");
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
