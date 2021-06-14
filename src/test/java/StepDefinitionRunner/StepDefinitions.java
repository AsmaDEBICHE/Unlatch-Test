package StepDefinitionRunner;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.Before;

import cucumber.api.junit.Cucumber;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.runner.RunWith;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;

import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

@RunWith(Cucumber.class)
public class StepDefinitions {

	WebDriver driver;

	@Before

	public void init() {
		System.setProperty("webdriver.chrome.driver", "./Drivers\\chromedriver.exe");

	}

	@Given("^Acceder a URL du site web legalife$")
	public void accder_lurl_du_site_web_httpswwwlegalifefr() throws Throwable {

		driver = new ChromeDriver();
		driver.navigate().to("https://www.legalife.fr/");
		driver.manage().window().maximize();
	}

	@When("^Cliquer sur le bouton Connection$")
	public void cliquer_sur_le_bouton_connection() throws Throwable {

		driver.findElement(By.xpath("//a[normalize-space()='Connexion']")).click();

		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("cookie-button")));
		driver.findElement(By.id("cookie-button")).click();

		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);

	}

	@When("^Saisir un email valide dans l icone indiquant  Votre email$")

	public void saisir_un_email_valide_dans_l_icone_indiquant_Votre_email() throws Throwable {

		driver.findElement(By.xpath("//*[@id=\"login-popup-login\"]/form/input[2]"))
				.sendKeys("asma.debiche.92@gmail.com");

	}

	@When("^Saisir un mot de passe non valide dans l icone indiquant Votre mot de passe$")
	public void saisir_un_mot_de_passe_non_valide_dans_licne_indiquant_votre_mot_de_passe_() throws Throwable {

		driver.findElement(By.xpath("//input[@placeholder='Votre mot de passe']")).sendKeys("Unlatch");

	}

	@When("^Cliquer sur le bouton CONNECTION$")
	public void cliquer_sur_le_bouton_connection_() throws Throwable {

		driver.findElement(By.xpath("//button[normalize-space()='Connexion']")).click();

	}

	@Then("^Affichage d un message Mot de passe incorrect$")
	public void affichage_dun_message_mot_de_passe_incorrect_() throws Throwable {

		String Actualresult = driver.getCurrentUrl();

		String Expectedresult = "https://www.legalife.fr/inscription/";

		Assert.assertEquals(Expectedresult, Actualresult);

		driver.quit();
	}

}
