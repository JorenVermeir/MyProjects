package db;

import domain.Person;

import java.util.List;

public interface PersonDb {
    List<Person> getAll();
    Person getPerson(int id);
    void add(Person person);
    void update(Person person);
    void delete(int personId);
    Person loadUserByUsername(String totem);
}
