package controller;

import domain.Person;
import domain.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.io.IOException;
import java.util.ArrayList;

@Controller
@RequestMapping(value ="/person")
public class PersonOverviewController {
    private final Service service;

    public  PersonOverviewController(@Autowired Service service){
       this.service = service;
    }

    @RequestMapping(method= RequestMethod.GET)
    public ModelAndView getCountries(HttpServletRequest request){
        request.setAttribute("weer", service.getWeer());
        return new ModelAndView("personOverview","persons", service.getPersons());
    }

    @RequestMapping(value = "/new", method =RequestMethod.GET)
    public ModelAndView getNewForm(){
        return new ModelAndView("addPerson", "person", new Person());
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public String save(@Valid Person person, BindingResult result){
        if(result.hasErrors()){
            return "addPerson";
        }
        service.addPerson(person);
        return "redirect:/person.htm";
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ModelAndView getEditForm(@PathVariable int id){
        return new ModelAndView("editPerson", "person", service.getPerson(id));
    }

    @RequestMapping(value = "/index", method = RequestMethod.POST)
    public String index(){

        return "index";
    }

    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    public String editPerson(@Valid Person person, BindingResult result){
        if (result.hasErrors()){
            return "editPerson";
        }
        service.updatePerson(person);
        return "redirect:/person.htm";
    }
    @RequestMapping(value = "/delete/{id}", method = RequestMethod.POST)
    public String deletePerson(@PathVariable int id){
        service.deletePerson(id);
        return "redirect:/person.htm";
    }
}