package org.ucll.demo.service;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertEquals;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.ucll.demo.domain.Gender;
import org.ucll.demo.service.api.java.PersonServiceJavaApi;
import org.ucll.demo.service.api.java.to.ExaminationDetail;
import org.ucll.demo.service.api.java.to.PersonDetail;

import cucumber.api.Format;
import cucumber.api.PendingException;

public class ShowPatientDetailsSteps {
	
	private PersonDetail patient;
	private String socialSecurityNumber;
	private String unregisteredSocialSecurityNumber = "0000";
	private Gender gender = Gender.MALE;
	private Date birthDate = java.sql.Date.valueOf("2000-09-10");
	
	private ExaminationDetail examination;
	private int length;
	private int weight;
	private Date lastExaminationDate;
	private double bmi;
	
	private static final SimpleDateFormat DATE_FORMATTER = new SimpleDateFormat("yyyy-MM-dd");
	
	PersonServiceJavaApi service = new PersonServiceJavaApi();
	
	private boolean errorThrown;
	
	@After
	public void teardown() {
		try {
			service.deletePerson(this.socialSecurityNumber);
		} catch (IllegalArgumentException e) {
			
		}
	}
	@Given("^a patient that is registered with a length (\\d+) cm and weight (\\d+) gr on date (\\d+)-(\\d+)-(\\d+)$")
	public void a_patient_that_is_registered_with_a_length_cm_and_weight_gr_on_date(@Format("yyyy-MM-dd") Date date, int length, int weight) throws Throwable {
		this.length = length;
		this.weight = weight;
		this.lastExaminationDate = date;
		this.examination = new ExaminationDetail(length, weight, date);
	    patient.setExaminationDetail(examination);
	}
	@Given("^a patient that is registered with a length (\\d+) cm and weight (\\d+) gr on date \"([^\"]*)\"$")
	public void a_patient_that_is_registered_with_a_length_cm_and_weight_gr_on_date(int arg1, int arg2, String arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
	//Spec 1
	@Given("^a patient with the social security number \"([^\"]*)\", gender \"([^\"]*)\" and birthdate \"([^\"]*)\"$")
	public void a_patient_with_the_social_security_number_gender_and_birthdate(String socialSecurityNumber, String gender, 
			@Format("yyyy-MM-dd") Date date) throws Throwable {
		this.socialSecurityNumber = socialSecurityNumber;
		this.gender = Gender.valueOf(gender.toUpperCase());
		this.birthDate = date;
		patient = new PersonDetail(this.socialSecurityNumber, this.gender, this.birthDate);
	}
	

	@Given("^on \"([^\"]*)\" the patient had a length of (\\d+) cm and a weight of (\\d+) gr$")
	public void on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(@Format("yyyy-MM-dd") Date date, int length, int weight) throws Throwable {
		this.length = length;
		this.weight = weight;
		this.lastExaminationDate = date;
		this.examination = new ExaminationDetail(length, weight, date);
	    patient.setExaminationDetail(examination);
	}
	

	@Given("^the patient is registered$")
	public void the_patient_is_registered() throws Throwable {
	    service.addPerson(patient);
	}
	
	@When("^I ask for the details of the patient using his social security number$")
	public void i_ask_for_the_details_of_the_patient_using_his_social_security_number() throws Throwable {
		try {
			patient = service.getPerson(this.socialSecurityNumber);
		} catch (IllegalArgumentException e) {
			errorThrown = true;
		}
	}
	
	@Then("^the personal details social security number, gender and birthdate are given$")
	public void the_personal_details_social_security_number_gender_and_birthdate_are_given() throws Throwable {
	    assertEquals(this.socialSecurityNumber, patient.getSocialSecurityNumber());
	    assertEquals(Gender.MALE, patient.getGender());
	    assertEquals(this.birthDate, patient.getBirthdate());
	}
	
	@Then("^the examination details length, weight and last examination date are given$")
	public void the_examination_details_length_weight_and_last_examination_date_are_given() throws Throwable {
	    examination = patient.getExaminationDetail();
	    assertEquals(this.length, examination.getLength());
	    assertEquals(this.weight, examination.getWeight());
	    assertEquals(this.lastExaminationDate, examination.getExaminationDate());
	}
	
	@Then("^the calculated bmi ((?:\\d|\\.)+) is given$")
	public void the_calculated_bmi_is_given(double bmi) throws Throwable {
	    assertEquals(bmi, service.getPerson(this.socialSecurityNumber).getBmi(), 4);
	}
	
	
	//Spec 2
	@Given("^a patient with the social security number \"([^\"]*)\"$")
	public void a_patient_with_the_social_security_number(String socialSecurityNumber) throws Throwable {
		this.socialSecurityNumber = socialSecurityNumber;
		patient = new PersonDetail(socialSecurityNumber, this.gender, this.birthDate);
	}

	@Given("^on \"([^\"]*)\" the patient had a length of (\\d+) cm and a weight of (\\d+) gr but these data were added later$")
	public void on_the_patient_had_a_length_of_cm_and_a_weight_of_gr_but_these_data_were_added_later(@Format("yyyy-MM-dd") Date date, 
			int length, int weight) throws Throwable {
		this.length = length;
		this.weight = weight;
		this.lastExaminationDate = date;
		this.examination = new ExaminationDetail(length, weight, date);
	    patient.setExaminationDetail(examination);
	}

	@Then("^the length (\\d+), weight (\\d+), and date of the examination \"([^\"]*)\" are given$")
	public void the_length_weight_and_date_of_the_examination_are_given(int lengte, int weight, String date) throws Throwable {
	    assertEquals(lengte, patient.getExaminationDetail().getLength());
	    assertEquals(weight, patient.getExaminationDetail().getWeight());
	    assertEquals(date, DATE_FORMATTER.format(patient.getExaminationDetail().getExaminationDate()));
	}
	
//	@Then("^the length (\\d+), weight (\\d+), and date of the examination \"(\\d+)-(\\d+)-(\\d+)? are given$")
//	public void the_length_weight_and_date_of_the_examination_are_given(int arg1, int arg2, int arg3, int arg4, int arg5) throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
//	}
	
	@Then("^the calculated bmi (\\d+)\\.(\\d+) is based on these data$")
	public void the_calculated_bmi_is_based_on_these_data(int arg1, int arg2) throws Throwable {
	    bmi = Double.parseDouble(arg1 + "." + arg2);
	    assertEquals(bmi, patient.getBmi(), 4);
	}
	
	
	//Spec 3
	@Given("^a patient that is not registered$")
	public void a_patient_that_is_not_registered() throws Throwable {
	    unregisteredPatient = new PersonDetail(this.unregisteredSocialSecurityNumber, Gender.MALE, DATE_FORMATTER.parse("2005-10-09"));
	}

	@Then("^an error message is given$")
	public void an_error_message_is_given() throws Throwable {
		try {
			errorThrown = false;
			patient = service.getPerson(this.unregisteredSocialSecurityNumber);
		} catch (IllegalArgumentException e) {
			errorThrown = true;
		}
		assertEquals(true, errorThrown);
	}

	@Then("^no details are given$")
	public void no_details_are_given() throws Throwable {
		try {
			examination = service.getPerson(unregisteredSocialSecurityNumber).getExaminationDetail();
		} catch(IllegalArgumentException e) {
			assertEquals(null, examination);		
		}
	}
	
	
	//Spec 4
	@Given("^a patient that is registered with a length (\\d+) cm and weight (\\d+) gr$")
	public void a_patient_that_is_registered_with_a_length_cm_and_weight_gr(int length, int weight) throws Throwable {
		patient = new PersonDetail(this.unregisteredSocialSecurityNumber, Gender.MALE, DATE_FORMATTER.parse("2005-10-09"));
		examination = new ExaminationDetail();
		patient.setExaminationDetail(examination);
		patient.getExaminationDetail().setLength(length);
		patient.getExaminationDetail().setWeight(weight);
	    service.addPerson(patient);
	}

	@When("^I ask for the details of the patient$")
	public void i_ask_for_the_details_of_the_patient() throws Throwable {
	    examination = service.getPerson(this.unregisteredSocialSecurityNumber).getExaminationDetail();
	}

	@Then("^the bmi (\\d+)\\.(\\d+) is given rounded to two digits$")
	public void the_bmi_is_given_rounded_to_two_digits(int arg1, int arg2) throws Throwable {
		double bmi = Double.parseDouble(arg1 + "." + arg2);
	    assertEquals(bmi, service.getPerson(unregisteredSocialSecurityNumber).getBmi(), 4);
	}
}
