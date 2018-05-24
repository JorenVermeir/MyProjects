package controller;

import domain.Person;
import domain.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Controller
@RequestMapping(value = "/personRest")
public class PersonRestController {
    private final Service service;
    public  PersonRestController(@Autowired Service service){
        this.service = service;
    }
    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Person> getPersons() {
        return service.getPersons();
    }


    @RequestMapping(method = RequestMethod.POST )
    @ResponseBody
    public void createPerson(@RequestBody Person person) {
        service.addPerson(person);
    }


    @RequestMapping( method = RequestMethod.PATCH)
    @ResponseBody
    public void updatePerson(@RequestBody Person person){
       service.updatePerson(person);
    }

    @RequestMapping(value = "/{id}.json", method = RequestMethod.GET)
    @ResponseBody
    public Person getPerson(@PathVariable int id){
       return service.getPerson(id);
    }

    @RequestMapping(value = "/{id}.json", method = RequestMethod.DELETE)
    @ResponseBody
    public void deletePerson(@PathVariable int id){
        service.deletePerson(id);
    }
}
