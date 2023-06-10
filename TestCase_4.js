const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.headless();
const TestCase4 = async () => {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
  var username = "Shahzaib";
  var password = "zaibi123zk";
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
    await driver.sleep(5000);
    await driver
      .findElement(
        By.xpath(`/html/body/div/div[2]/section/div/div[2]/div[2]/button`)
      )
      .click();
    await driver
      .findElement(By.xpath(`/html/body/div/div[1]/div/a[2]`))
      .click();
    await driver.sleep(5000);
    await driver
      .findElement(By.xpath(`/html/body/div/div[2]/div/div/button`))
      .click();
    let text = await driver
      .findElement(By.xpath(`/html/body/div/div[2]/h4`))
      .getText();
    if (text === "0") {
      console.log("Test Case-5 (REMOVE THE CART ITEM) passed");
    } else {
      console.log("Test Case-5 (REMOVE THE CART ITEM) failed.");
    }
  } catch (error) {
    console.log("Test Case-5 (REMOVE THE CART ITEM) failed.");
  } finally {
    await driver.quit();
  }
};
module.exports = { TestCase4 };
