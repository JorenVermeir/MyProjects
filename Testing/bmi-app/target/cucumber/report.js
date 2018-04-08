$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/org/ucll/demo/service/AddPatient.feature");
formatter.feature({
  "line": 1,
  "name": "add patient",
  "description": "\r\nIn order to monitor a person\r\nAs a caretaker\r\nI can register a new patient",
  "id": "add-patient",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "the personal details of an unregistered patient are given",
  "description": "",
  "id": "add-patient;the-personal-details-of-an-unregistered-patient-are-given",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "on \"2000-04-10\" the patient had a length of 180 cm and a weight of 75000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the patient is not registered",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "The person is registered on the system",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "The social security number is shown in the overview",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 712329700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "180",
      "offset": 44
    },
    {
      "val": "75000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "duration": 1353695,
  "status": "passed"
});
formatter.match({
  "location": "AddPatientSteps.the_patient_is_not_registered()"
});
formatter.result({
  "duration": 3951422,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.the_patient_is_not_registered(AddPatientSteps.java:12)\r\n\tat ✽.And the patient is not registered(src/test/resources/org/ucll/demo/service/AddPatient.feature:10)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.the_person_is_registered_on_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.the_social_security_number_is_shown_in_the_overview()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 151272,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "An error is shown when the length of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "on \"2000-04-10\" the patient had a length of \u003clength\u003e cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid;",
  "rows": [
    {
      "cells": [
        "lenght"
      ],
      "line": 22,
      "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid;;1"
    },
    {
      "cells": [
        "-160"
      ],
      "line": 23,
      "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid;;2"
    },
    {
      "cells": [
        "-1"
      ],
      "line": 24,
      "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid;;3"
    },
    {
      "cells": [
        "25"
      ],
      "line": 25,
      "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid;;4"
    },
    {
      "cells": [
        "301"
      ],
      "line": 26,
      "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid;;5"
    },
    {
      "cells": [
        "390"
      ],
      "line": 27,
      "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "An error is shown when the length of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "on \"2000-04-10\" the patient had a length of \u003clength\u003e cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 468980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "65000",
      "offset": 72
    }
  ],
  "location": "AddPatientSteps.on_the_patient_had_a_length_of_length_cm_and_a_weight_of_gr(String,int)"
});
formatter.result({
  "duration": 730269,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.on_the_patient_had_a_length_of_length_cm_and_a_weight_of_gr(AddPatientSteps.java:36)\r\n\tat ✽.And on \"2000-04-10\" the patient had a length of \u003clength\u003e cm and a weight of 65000 gr(src/test/resources/org/ucll/demo/service/AddPatient.feature:17)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 72992,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "An error is shown when the length of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "on \"2000-04-10\" the patient had a length of \u003clength\u003e cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 494368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "65000",
      "offset": 72
    }
  ],
  "location": "AddPatientSteps.on_the_patient_had_a_length_of_length_cm_and_a_weight_of_gr(String,int)"
});
formatter.result({
  "duration": 453465,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.on_the_patient_had_a_length_of_length_cm_and_a_weight_of_gr(AddPatientSteps.java:36)\r\n\tat ✽.And on \"2000-04-10\" the patient had a length of \u003clength\u003e cm and a weight of 65000 gr(src/test/resources/org/ucll/demo/service/AddPatient.feature:17)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 75460,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "An error is shown when the length of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "on \"2000-04-10\" the patient had a length of \u003clength\u003e cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 458401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "65000",
      "offset": 72
    }
  ],
  "location": "AddPatientSteps.on_the_patient_had_a_length_of_length_cm_and_a_weight_of_gr(String,int)"
});
formatter.result({
  "duration": 863558,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.on_the_patient_had_a_length_of_length_cm_and_a_weight_of_gr(AddPatientSteps.java:36)\r\n\tat ✽.And on \"2000-04-10\" the patient had a length of \u003clength\u003e cm and a weight of 65000 gr(src/test/resources/org/ucll/demo/service/AddPatient.feature:17)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 386468,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "An error is shown when the length of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "on \"2000-04-10\" the patient had a length of \u003clength\u003e cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 1960548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "65000",
      "offset": 72
    }
  ],
  "location": "AddPatientSteps.on_the_patient_had_a_length_of_length_cm_and_a_weight_of_gr(String,int)"
});
formatter.result({
  "duration": 1147415,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.on_the_patient_had_a_length_of_length_cm_and_a_weight_of_gr(AddPatientSteps.java:36)\r\n\tat ✽.And on \"2000-04-10\" the patient had a length of \u003clength\u003e cm and a weight of 65000 gr(src/test/resources/org/ucll/demo/service/AddPatient.feature:17)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 276099,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "An error is shown when the length of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-length-of-the-person-is-invalid;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "on \"2000-04-10\" the patient had a length of \u003clength\u003e cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 713344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "65000",
      "offset": 72
    }
  ],
  "location": "AddPatientSteps.on_the_patient_had_a_length_of_length_cm_and_a_weight_of_gr(String,int)"
});
formatter.result({
  "duration": 385763,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.on_the_patient_had_a_length_of_length_cm_and_a_weight_of_gr(AddPatientSteps.java:36)\r\n\tat ✽.And on \"2000-04-10\" the patient had a length of \u003clength\u003e cm and a weight of 65000 gr(src/test/resources/org/ucll/demo/service/AddPatient.feature:17)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 50777,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "An error is shown when the weight of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-weight-of-the-person-is-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of \u003cweight\u003e gr",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-weight-of-the-person-is-invalid;",
  "rows": [
    {
      "cells": [
        "weight"
      ],
      "line": 36,
      "id": "add-patient;an-error-is-shown-when-the-weight-of-the-person-is-invalid;;1"
    },
    {
      "cells": [
        "-1000"
      ],
      "line": 37,
      "id": "add-patient;an-error-is-shown-when-the-weight-of-the-person-is-invalid;;2"
    },
    {
      "cells": [
        "10000"
      ],
      "line": 38,
      "id": "add-patient;an-error-is-shown-when-the-weight-of-the-person-is-invalid;;3"
    },
    {
      "cells": [
        "701000"
      ],
      "line": 39,
      "id": "add-patient;an-error-is-shown-when-the-weight-of-the-person-is-invalid;;4"
    },
    {
      "cells": [
        "800000"
      ],
      "line": 40,
      "id": "add-patient;an-error-is-shown-when-the-weight-of-the-person-is-invalid;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 37,
  "name": "An error is shown when the weight of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-weight-of-the-person-is-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of -1000 gr",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 629421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "1000",
      "offset": 68
    }
  ],
  "location": "AddPatientSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(String,int,int)"
});
formatter.result({
  "duration": 466512,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(AddPatientSteps.java:48)\r\n\tat ✽.And on \"2000-04-10\" the patient had a length of 160 cm and a weight of -1000 gr(src/test/resources/org/ucll/demo/service/AddPatient.feature:31)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 44430,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "An error is shown when the weight of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-weight-of-the-person-is-invalid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 10000 gr",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 1903425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "10000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "duration": 1587481,
  "status": "passed"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "duration": 339923,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.i_add_the_person_to_the_system(AddPatientSteps.java:18)\r\n\tat ✽.When I add the person to the system(src/test/resources/org/ucll/demo/service/AddPatient.feature:32)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 38082,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "An error is shown when the weight of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-weight-of-the-person-is-invalid;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 701000 gr",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 446060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "701000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "duration": 348386,
  "status": "passed"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "duration": 392815,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.i_add_the_person_to_the_system(AddPatientSteps.java:18)\r\n\tat ✽.When I add the person to the system(src/test/resources/org/ucll/demo/service/AddPatient.feature:32)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 38435,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "An error is shown when the weight of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-weight-of-the-person-is-invalid;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 800000 gr",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 986974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "800000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "duration": 555371,
  "status": "passed"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "duration": 1183382,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.i_add_the_person_to_the_system(AddPatientSteps.java:18)\r\n\tat ✽.When I add the person to the system(src/test/resources/org/ucll/demo/service/AddPatient.feature:32)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 33499,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "An error is shown when the gender of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-gender-of-the-person-is-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "a patient with the social security number \"93051822361\", gender \u003cgender\u003e and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 48,
  "name": "",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-gender-of-the-person-is-invalid;",
  "rows": [
    {
      "cells": [
        "gender"
      ],
      "line": 49,
      "id": "add-patient;an-error-is-shown-when-the-gender-of-the-person-is-invalid;;1"
    },
    {
      "cells": [
        "\"ale\""
      ],
      "line": 50,
      "id": "add-patient;an-error-is-shown-when-the-gender-of-the-person-is-invalid;;2"
    },
    {
      "cells": [
        "\"emale\""
      ],
      "line": 51,
      "id": "add-patient;an-error-is-shown-when-the-gender-of-the-person-is-invalid;;3"
    },
    {
      "cells": [
        "\"apache helicopter\""
      ],
      "line": 52,
      "id": "add-patient;an-error-is-shown-when-the-gender-of-the-person-is-invalid;;4"
    },
    {
      "cells": [
        "\"maleatermeloen\""
      ],
      "line": 53,
      "id": "add-patient;an-error-is-shown-when-the-gender-of-the-person-is-invalid;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 50,
  "name": "An error is shown when the gender of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-gender-of-the-person-is-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "a patient with the social security number \"93051822361\", gender \"ale\" and birthdate \"1993-05-18\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "ale",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 85
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 1069486,
  "error_message": "java.lang.IllegalArgumentException: No enum constant org.ucll.demo.domain.Gender.ALE\r\n\tat java.lang.Enum.valueOf(Enum.java:238)\r\n\tat org.ucll.demo.domain.Gender.valueOf(Gender.java:3)\r\n\tat org.ucll.demo.service.ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(ShowPatientDetailsSteps.java:66)\r\n\tat ✽.Given a patient with the social security number \"93051822361\", gender \"ale\" and birthdate \"1993-05-18\"(src/test/resources/org/ucll/demo/service/AddPatient.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "65000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 37378,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "An error is shown when the gender of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-gender-of-the-person-is-invalid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "a patient with the social security number \"93051822361\", gender \"emale\" and birthdate \"1993-05-18\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "emale",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 87
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 1893904,
  "error_message": "java.lang.IllegalArgumentException: No enum constant org.ucll.demo.domain.Gender.EMALE\r\n\tat java.lang.Enum.valueOf(Enum.java:238)\r\n\tat org.ucll.demo.domain.Gender.valueOf(Gender.java:3)\r\n\tat org.ucll.demo.service.ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(ShowPatientDetailsSteps.java:66)\r\n\tat ✽.Given a patient with the social security number \"93051822361\", gender \"emale\" and birthdate \"1993-05-18\"(src/test/resources/org/ucll/demo/service/AddPatient.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "65000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 37730,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "An error is shown when the gender of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-gender-of-the-person-is-invalid;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "a patient with the social security number \"93051822361\", gender \"apache helicopter\" and birthdate \"1993-05-18\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "apache helicopter",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 99
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 1352990,
  "error_message": "java.lang.IllegalArgumentException: No enum constant org.ucll.demo.domain.Gender.APACHE HELICOPTER\r\n\tat java.lang.Enum.valueOf(Enum.java:238)\r\n\tat org.ucll.demo.domain.Gender.valueOf(Gender.java:3)\r\n\tat org.ucll.demo.service.ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(ShowPatientDetailsSteps.java:66)\r\n\tat ✽.Given a patient with the social security number \"93051822361\", gender \"apache helicopter\" and birthdate \"1993-05-18\"(src/test/resources/org/ucll/demo/service/AddPatient.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "65000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 55713,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "An error is shown when the gender of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-gender-of-the-person-is-invalid;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "a patient with the social security number \"93051822361\", gender \"maleatermeloen\" and birthdate \"1993-05-18\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "maleatermeloen",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 96
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 1663998,
  "error_message": "java.lang.IllegalArgumentException: No enum constant org.ucll.demo.domain.Gender.MALEATERMELOEN\r\n\tat java.lang.Enum.valueOf(Enum.java:238)\r\n\tat org.ucll.demo.domain.Gender.valueOf(Gender.java:3)\r\n\tat org.ucll.demo.service.ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(ShowPatientDetailsSteps.java:66)\r\n\tat ✽.Given a patient with the social security number \"93051822361\", gender \"maleatermeloen\" and birthdate \"1993-05-18\"(src/test/resources/org/ucll/demo/service/AddPatient.feature:43)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "65000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 55008,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "An error is shown when the social security number of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-social-security-number-of-the-person-is-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "a patient with the social security number \u003cssn\u003e, gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 61,
  "name": "",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-social-security-number-of-the-person-is-invalid;",
  "rows": [
    {
      "cells": [
        "ssn"
      ],
      "line": 62,
      "id": "add-patient;an-error-is-shown-when-the-social-security-number-of-the-person-is-invalid;;1"
    },
    {
      "cells": [
        "\"\""
      ],
      "line": 63,
      "id": "add-patient;an-error-is-shown-when-the-social-security-number-of-the-person-is-invalid;;2"
    },
    {
      "cells": [
        "\"h7fwhcewhce\""
      ],
      "line": 64,
      "id": "add-patient;an-error-is-shown-when-the-social-security-number-of-the-person-is-invalid;;3"
    },
    {
      "cells": [
        "\"watermeloen\""
      ],
      "line": 65,
      "id": "add-patient;an-error-is-shown-when-the-social-security-number-of-the-person-is-invalid;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 63,
  "name": "An error is shown when the social security number of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-social-security-number-of-the-person-is-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "a patient with the social security number \"\", gender \"male\" and birthdate \"1993-05-18\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 54
    },
    {
      "val": "1993-05-18",
      "offset": 75
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 6767771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "65000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "duration": 1535646,
  "status": "passed"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "duration": 736264,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.i_add_the_person_to_the_system(AddPatientSteps.java:18)\r\n\tat ✽.When I add the person to the system(src/test/resources/org/ucll/demo/service/AddPatient.feature:58)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 33498,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "An error is shown when the social security number of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-social-security-number-of-the-person-is-invalid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "a patient with the social security number \"h7fwhcewhce\", gender \"male\" and birthdate \"1993-05-18\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "h7fwhcewhce",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 2503226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "65000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "duration": 390347,
  "status": "passed"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "duration": 289146,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.i_add_the_person_to_the_system(AddPatientSteps.java:18)\r\n\tat ✽.When I add the person to the system(src/test/resources/org/ucll/demo/service/AddPatient.feature:58)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 363548,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "An error is shown when the social security number of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-social-security-number-of-the-person-is-invalid;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "a patient with the social security number \"watermeloen\", gender \"male\" and birthdate \"1993-05-18\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "watermeloen",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 614258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "65000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "duration": 517288,
  "status": "passed"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "duration": 454876,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.i_add_the_person_to_the_system(AddPatientSteps.java:18)\r\n\tat ✽.When I add the person to the system(src/test/resources/org/ucll/demo/service/AddPatient.feature:58)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 44782,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "registering a new person with a social security number already existing gives an error message",
  "description": "",
  "id": "add-patient;registering-a-new-person-with-a-social-security-number-already-existing-gives-an-error-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 68,
  "name": "a registered patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "on \"2000-04-10\" the patient had a length of 180 cm and a weight of 70000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I add the unregistered person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 54
    },
    {
      "val": "male",
      "offset": 76
    },
    {
      "val": "1993-05-18",
      "offset": 97
    }
  ],
  "location": "AddPatientSteps.a_registered_patient_with_the_social_security_number_gender_and_birthdate(String,String,String)"
});
formatter.result({
  "duration": 561366,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.a_registered_patient_with_the_social_security_number_gender_and_birthdate(AddPatientSteps.java:60)\r\n\tat ✽.Given a registered patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"(src/test/resources/org/ucll/demo/service/AddPatient.feature:68)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "65000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "180",
      "offset": 44
    },
    {
      "val": "70000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_unregistered_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 221796,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 78,
  "name": "An error is shown when the birthdate of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and \u003cbirthdate\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid;",
  "rows": [
    {
      "cells": [
        "birthdate"
      ],
      "line": 85,
      "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid;;1"
    },
    {
      "cells": [
        "\"0000-00-00\""
      ],
      "line": 86,
      "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid;;2"
    },
    {
      "cells": [
        "\"2025-10-10\""
      ],
      "line": 87,
      "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 86,
  "name": "An error is shown when the birthdate of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and \"0000-00-00\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "0000-00-00",
      "offset": 76
    }
  ],
  "location": "AddPatientSteps.a_patient_with_the_social_security_number_gender_and(String,String,String)"
});
formatter.result({
  "duration": 528220,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.a_patient_with_the_social_security_number_gender_and(AddPatientSteps.java:54)\r\n\tat ✽.Given a patient with the social security number \"93051822361\", gender \"male\" and \"0000-00-00\"(src/test/resources/org/ucll/demo/service/AddPatient.feature:79)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "65000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 194997,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "An error is shown when the birthdate of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 79,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and \"2025-10-10\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "on \"2000-04-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "2025-10-10",
      "offset": 76
    }
  ],
  "location": "AddPatientSteps.a_patient_with_the_social_security_number_gender_and(String,String,String)"
});
formatter.result({
  "duration": 735558,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.a_patient_with_the_social_security_number_gender_and(AddPatientSteps.java:54)\r\n\tat ✽.Given a patient with the social security number \"93051822361\", gender \"male\" and \"2025-10-10\"(src/test/resources/org/ucll/demo/service/AddPatient.feature:79)\r\n",
  "status": "pending"
});
formatter.match({
  "arguments": [
    {
      "val": "2000-04-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "65000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 345564,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 89,
  "name": "An error is shown when the birthdate of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "on \u003cexdate\u003e the patient had a length of 160 cm and a weight of 65000 gr",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 95,
  "name": "",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid;",
  "rows": [
    {
      "cells": [
        "exdate"
      ],
      "line": 96,
      "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid;;1"
    },
    {
      "cells": [
        "\"0000-00-00\""
      ],
      "line": 97,
      "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid;;2"
    },
    {
      "cells": [
        "\"2025-10-10\""
      ],
      "line": 98,
      "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 97,
  "name": "An error is shown when the birthdate of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "on \"0000-00-00\" the patient had a length of 160 cm and a weight of 65000 gr",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 667151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0000-00-00",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "65000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "duration": 1158698,
  "error_message": "cucumber.deps.com.thoughtworks.xstream.converters.ConversionException: Couldn\u0027t convert \"0000-00-00\" to an instance of: [class java.util.Date]\n---- Debugging information ----\n-------------------------------\r\n\tat cucumber.runtime.xstream.ConverterWithFormat.transform(ConverterWithFormat.java:31)\r\n\tat cucumber.api.Transformer.fromString(Transformer.java:91)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.SingleValueConverterWrapper.fromString(SingleValueConverterWrapper.java:41)\r\n\tat cucumber.runtime.ParameterInfo.convert(ParameterInfo.java:164)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:68)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n\tat ✽.And on \"0000-00-00\" the patient had a length of 160 cm and a weight of 65000 gr(src/test/resources/org/ucll/demo/service/AddPatient.feature:91)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 42667,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "An error is shown when the birthdate of the person is invalid",
  "description": "",
  "id": "add-patient;an-error-is-shown-when-the-birthdate-of-the-person-is-invalid;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 90,
  "name": "a patient with the social security number \"93051822361\", gender \"male\" and birthdate \"1993-05-18\"",
  "keyword": "Given "
});
formatter.step({
  "line": 91,
  "name": "on \"2025-10-10\" the patient had a length of 160 cm and a weight of 65000 gr",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "I add the person to the system",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "An error is shown",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "93051822361",
      "offset": 43
    },
    {
      "val": "male",
      "offset": 65
    },
    {
      "val": "1993-05-18",
      "offset": 86
    }
  ],
  "location": "ShowPatientDetailsSteps.a_patient_with_the_social_security_number_gender_and_birthdate(String,String,Date)"
});
formatter.result({
  "duration": 972870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2025-10-10",
      "offset": 4
    },
    {
      "val": "160",
      "offset": 44
    },
    {
      "val": "65000",
      "offset": 67
    }
  ],
  "location": "ShowPatientDetailsSteps.on_the_patient_had_a_length_of_cm_and_a_weight_of_gr(Date,int,int)"
});
formatter.result({
  "duration": 388231,
  "status": "passed"
});
formatter.match({
  "location": "AddPatientSteps.i_add_the_person_to_the_system()"
});
formatter.result({
  "duration": 6212752,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat org.ucll.demo.service.AddPatientSteps.i_add_the_person_to_the_system(AddPatientSteps.java:18)\r\n\tat ✽.When I add the person to the system(src/test/resources/org/ucll/demo/service/AddPatient.feature:92)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "AddPatientSteps.an_error_is_shown()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 216860,
  "status": "passed"
});
});