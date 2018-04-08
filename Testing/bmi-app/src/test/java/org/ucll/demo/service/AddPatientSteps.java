package org.ucll.demo.service;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AddPatientSteps {
	@Given("^the patient is not registered$")
	public void the_patient_is_not_registered() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^I add the person to the system$")
	public void i_add_the_person_to_the_system() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^The person is registered on the system$")
	public void the_person_is_registered_on_the_system() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^The social security number is shown in the overview$")
	public void the_social_security_number_is_shown_in_the_overview() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Given("^on \"([^\"]*)\" the patient had a length of <length> cm and a weight of (\\d+) gr$")
	public void on_the_patient_had_a_length_of_length_cm_and_a_weight_of_gr(String arg1, int arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^An error is shown$")
	public void an_error_is_shown() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Given("^on \"([^\"]*)\" the patient had a length of (\\d+) cm and a weight of -(\\d+) gr$")
	public void on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(String arg1, int arg2, int arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Given("^a patient with the social security number \"([^\"]*)\", gender \"([^\"]*)\" and \"([^\"]*)\"$")
	public void a_patient_with_the_social_security_number_gender_and(String arg1, String arg2, String arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	
	@Given("^a registered patient with the social security number \"([^\"]*)\", gender \"([^\"]*)\" and birthdate \"([^\"]*)\"$")
	public void a_registered_patient_with_the_social_security_number_gender_and_birthdate(String arg1, String arg2, String arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^I add the unregistered person to the system$")
	public void i_add_the_unregistered_person_to_the_system() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
}
