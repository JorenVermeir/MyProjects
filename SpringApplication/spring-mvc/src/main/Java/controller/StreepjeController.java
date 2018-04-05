package controller;

import domain.Service;
import domain.Streepje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@Controller
@RequestMapping(value ="/streepje")
public class StreepjeController {
    private final Service service;

    public  StreepjeController(@Autowired Service service){
        this.service = service;
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ModelAndView getEditForm(@PathVariable int id){
        Streepje streepje = new Streepje(id, 1, null);
        return new ModelAndView("addStreepje", "streepje", streepje);
    }
    @RequestMapping(value = "/overview/{id}", method = RequestMethod.GET)
    public ModelAndView getOverview(@PathVariable int id, HttpServletRequest request){
        request.setAttribute("userId", id);
        return new ModelAndView("streepjesOverview", "streepjes", service.getPersonStreepjes(id));
    }
    @RequestMapping(value = "new", method = RequestMethod.POST)
    public String Save(@Valid Streepje streepje, BindingResult result){
        if (result.hasErrors()){
            return "addStreepje";
        }else{
            service.addStreepje(streepje);
            return "redirect:/person.htm";
        }
    }
    @RequestMapping(value = "/deletePersonStreepjes/{userId}", method = RequestMethod.POST)
    public String deletePersonStreepjes(int userId){
        service.deletePersonStreepjes(userId);
        return "redirect:/person.htm";
    }
}
