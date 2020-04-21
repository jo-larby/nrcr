import { dashboardPage } from "./dashboard.po";
import { browser, logging } from "protractor";

describe("dashboard page", () => {
  let page: dashboardPage;

  beforeEach(() => {
    page = new dashboardPage();
  });

  it("should display page title ", () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual("Newcastle RC Car Racers");
  });

  it("should display announcements title ", () => {
    page.navigateTo();
    expect(page.getAnnouncementText()).toEqual("Announcements");
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
