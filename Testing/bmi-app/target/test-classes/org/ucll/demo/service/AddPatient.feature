Feature: add patient
  
  In order to monitor a person
  As a caretaker
  I can register a new patient

  Scenario: the personal details of an unregistered patient are given
    Given a patient with the social security number "93051822361", gender "male" and birthdate "1993-05-18"
    And on "2000-04-10" the patient had a length of 180 cm and a weight of 75000 gr
    And the patient is not registered
    When I add the person to the system
    Then The person is registered on the system
    And The social security number is shown in the overview

  Scenario Outline: An error is shown when the length of the person is invalid
    Given a patient with the social security number "93051822361", gender "male" and birthdate "1993-05-18"
    And on "2000-04-10" the patient had a length of <length> cm and a weight of 65000 gr
    When I add the person to the system
    Then An error is shown

    Examples: 
      | lenght |
      |   -160 |
      |     -1 |
      |     25 |
      |    301 |
      |    390 |

  Scenario Outline: An error is shown when the weight of the person is invalid
    Given a patient with the social security number "93051822361", gender "male" and birthdate "1993-05-18"
    And on "2000-04-10" the patient had a length of 160 cm and a weight of <weight> gr
    When I add the person to the system
    Then An error is shown

    Examples: 
      | weight |
      |  -1000 |
      |  10000 |
      | 701000 |
      | 800000 |

  Scenario Outline: An error is shown when the gender of the person is invalid
    Given a patient with the social security number "93051822361", gender <gender> and birthdate "1993-05-18"
    And on "2000-04-10" the patient had a length of 160 cm and a weight of 65000 gr
    When I add the person to the system
    Then An error is shown

    Examples: 
      | gender              |
      | "ale"               |
      | "emale"             |
      | "apache helicopter" |
      | "maleatermeloen"    |

  Scenario Outline: An error is shown when the social security number of the person is invalid
    Given a patient with the social security number <ssn>, gender "male" and birthdate "1993-05-18"
    And on "2000-04-10" the patient had a length of 160 cm and a weight of 65000 gr
    When I add the person to the system
    Then An error is shown
    
    Examples: 
      | ssn           |
      | ""            |
      | "h7fwhcewhce" |
      | "watermeloen" |
      
	Scenario: registering a new person with a social security number already existing gives an error message
		Given a registered patient with the social security number "93051822361", gender "male" and birthdate "1993-05-18"
    And on "2000-04-10" the patient had a length of 160 cm and a weight of 65000 gr
    And a patient with the social security number "93051822361", gender "male" and birthdate "1993-05-18"
     And on "2000-04-10" the patient had a length of 180 cm and a weight of 70000 gr
    When I add the unregistered person to the system
    Then An error is shown


    

  Scenario Outline: An error is shown when the birthdate of the person is invalid
    Given a patient with the social security number "93051822361", gender "male" and <birthdate>
    And on "2000-04-10" the patient had a length of 160 cm and a weight of 65000 gr
    When I add the person to the system
    Then An error is shown

    Examples: 
      | birthdate    |
      | "0000-00-00" |
      | "2025-10-10" |

  Scenario Outline: An error is shown when the birthdate of the person is invalid
    Given a patient with the social security number "93051822361", gender "male" and birthdate "1993-05-18"
    And on <exdate> the patient had a length of 160 cm and a weight of 65000 gr
    When I add the person to the system
    Then An error is shown

    Examples: 
      | exdate       |
      | "0000-00-00" |
      | "2025-10-10" |
