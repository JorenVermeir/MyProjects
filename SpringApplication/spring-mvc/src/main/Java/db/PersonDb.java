package db;

import domain.Person;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.List;
import java.util.Set;

public interface PersonDb {
    List<Person> getAll();
    Person getPerson(int id);
    void add(Person person);
    void update(Person person);
    void delete(int personId);
    Person loadUserByUsername(String totem);
}
