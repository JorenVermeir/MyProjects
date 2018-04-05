package view;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import static junit.framework.TestCase.assertEquals;

public class addPersonIT {
    private WebDriver driver;
    @Before
    public void setUp(){
        System.setProperty("webdriver.chrome.driver", "C:/Users/Joren/Documents/Toegepaste informatica/ToegepasteInformatica2/Web3/chromedriver/chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("http://localhost:8080/person/new.htm");
    }

    @After
    public void clean(){
        driver.quit();
    }
    @Test
    public void addPerson_should_add_person_and_go_to_overview(){
        WebElement totem = driver.findElement(By.id("totem"));
        totem.clear();
        totem.sendKeys("Eland");
        WebElement firstName = driver.findElement(By.id("firstName"));
        firstName.clear();
        firstName.sendKeys("Hendrik");
        WebElement lastName = driver.findElement(By.id("lastName"));
        lastName.clear();
        lastName.sendKeys("Teas");

        WebElement btn = driver.findElement(By.id("save"));
        btn.click();

        assertEquals("StreepjesApp | person overview", driver.getTitle());
    }
}
