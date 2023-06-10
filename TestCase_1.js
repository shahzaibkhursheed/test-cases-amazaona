const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.headless();
const TestCase1 = async () => {
  var username = "shahzaib";
  var password = "zaibi123zk";
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
  try {
    await driver.get("https://203.0.113.42");
    await driver
      .findElement(
        By.xpath(`/html/body/div/div/div[2]/div[1]/form/div[1]/input`)
      )
      .sendKeys(username, Key.RETURN);
    await driver
      .findElement(
        By.xpath(`/html/body/div/div/div[2]/div[1]/form/div[2]/input`)
      )
      .sendKeys(password, Key.RETURN);
    await driver
      .findElement(
        By.xpath(`/html/body/div/div/div[2]/div[1]/form/div[3]/button`)
      )
      .click();
    await driver.wait(
      until.elementLocated(By.xpath("/html/body/div/div[2]/h2")),
      10000
    );
    console.log("Test Case-1 (LOGIN) passed.");
  } catch (error) {
    console.log("Test Case-1 (LOGIN) failed.");
  } finally {
    await driver.quit();
  }
};
module.exports = { TestCase1 };
