const { By, Key, Builder, until } = require("selenium-webdriver");
require("chromedriver");
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.headless();
const TestCase2 = async () => {
  var username = "Shahzaib";
  var email = "iamzaibi905@gmail";
  var password = "zaibi123zk";
  var confirmPassword = "zaibi123zk ";
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
  try {
    await driver.get("https://203.0.113.42");
    await driver
      .findElement(By.xpath(`/html/body/div/div/div[1]/div/a[3]`))
      .click();
    await driver.sleep(5000);
    await driver
      .findElement(By.xpath(`/html/body/div/div/div[2]/div/form/div[2]/input`))
      .sendKeys(username, Key.RETURN);
    await driver
      .findElement(By.xpath(`/html/body/div/div/div[2]/div/form/div[4]/input`))
      .sendKeys(email, Key.RETURN);
    await driver
      .findElement(By.xpath(`/html/body/div/div/div[2]/div/form/div[1]/input`))
      .sendKeys(password, Key.RETURN);
    await driver
      .findElement(By.xpath(`/html/body/div/div/div[2]/div/form/div[3]/input`))
      .sendKeys(confirmPassword, Key.RETURN);
    await driver
      .findElement(By.xpath(`/html/body/div/div/div[2]/div/form/div[5]/button`))
      .click();
    await driver.wait(
      until.elementLocated(
        By.xpath("/html/body/div/div/div[2]/div[2]/div/a[3]")
      ),
      10000
    );
    console.log("Test Case-2 (CREATE ACCOUNT) passed.");
  } catch (error) {
    console.log("Test Case-2 (CREATE ACCOUNT) failed.");
  } finally {
    await driver.quit();
  }
};
module.exports = { TestCase2 };
