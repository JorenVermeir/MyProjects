/*package service;

import domain.DomainException;
import domain.Person;
import domain.Service;
import domain.Streepje;
import org.junit.Test;

import java.util.List;

import static org.junit.Assert.*;
public class ServiceTest {
private Service s = new Service();

@Test
public void addPerson_db_stores_person_with_id_of_2(){
    Person p = new Person("Joren", "Vermeir", "Sifaka", "t");
    s.addPerson(p);
    Person a = s.getPerson(2);
    assertEquals(p.getFirstName(),a.getFirstName());
    assertEquals(p.getLastName(), a.getLastName());
    assertEquals(p.getTotem(), a.getTotem());
    assertEquals(2,a.getId());
    s.deletePerson(2);
}
@Test
    public void deletePerson_person_gets_deleted(){
    Person p = new Person("Joren", "Vermeir", "Sifaka", "t");
    s.addPerson(p);
    s.deletePerson(2);
    if(s.getPerson(2) == null){

    }else{
        throw new DomainException("Person wasn't deleted");
    }
}
@Test
    public void updatePerson(){
    Person p = new Person("Joren", "Vermeir", "Sifaka", "t");
    s.addPerson(p);
    Person a = s.getPerson(2);
    a.setFirstName("cool");
    s.updatePerson(a);
    Person b = s.getPerson(2);
    assertEquals(a.getFirstName(),b.getFirstName());
    assertEquals(a.getLastName(), b.getLastName());
    assertEquals(a.getTotem(), b.getTotem());
    assertEquals(2,a.getId());
    s.deletePerson(2);
}
@Test
public void deleteStreepje_should_delete_streepje(){
    Streepje streepje = new Streepje(2, 3, null);
    s.addStreepje(streepje);
    s.deleteStreepje(0);
    Streepje str = s.getStreepje(0);
    if (str == null){

    }else{
        throw new DomainException("Streepje not deleted");
    }
}
@Test
    public void addStreepje_should_give_right_Id(){
    Streepje streepje = new Streepje(2, 3, null);
    s.addStreepje(streepje);
    Streepje str = s.getStreepje(0);
    assertEquals(streepje.getUserid(), str.getUserid());
    assertEquals(streepje.getQuantity(), str.getQuantity());
    s.deleteStreepje(0);
}

@Test
    public void addStreepje_Should_add_Streepje_and_getstreepje_works(){
    Streepje streepje = new Streepje(2, 3, null);
    s.addStreepje(streepje);
    List<Streepje> streepjes =  s.getPersonStreepjes(2);
    Streepje s = streepjes.get(0);
    assertEquals(streepje.getUserid(), s.getUserid());
    assertEquals(streepje.getQuantity(), s.getQuantity());
}
}*/
