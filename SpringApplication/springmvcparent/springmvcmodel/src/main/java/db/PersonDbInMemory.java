package db;

import domain.Person;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class PersonDbInMemory implements PersonDb {
    private Map<Integer, Person> db;
    public PersonDbInMemory() {
        db = new LinkedHashMap<Integer, Person>();
        Person p = new Person("Joren", "Vermeir", "Sifaka", "t");
        add(p);
        p = new Person("Jasper", "vermeir", "Klipdas", "t");
        add(p);
    }


    public List<Person> getAll() {
        List<Person> l = new ArrayList<Person>(db.values());
        return l;
    }


    public Person getPerson(int id) {
        if (id < 0){
            throw new DbException("Empty id given");
        }
        return db.get(id);
    }


    public void add(Person person) {
        if (person == null){
            throw new DbException("Person was null");
        }
        int id = db.size();
        Person p = new Person(id, person.getFirstName(), person.getLastName(), person.getTotem(), person.isTrustEveryone());
        db.put(id,p);
    }


    public void update(Person person) {
        if (person == null){
            throw new DbException("empty person given");
        }
        if (!db.containsKey(person.getId())) {
            throw new DbException("No person found with that id!");
        }
        db.put(person.getId(), person);

    }


    public void delete(int personId) {
        if(personId < 0){
            throw new DbException("No id given");
        }
        db.remove(personId);
    }


    public Person loadUserByUsername(String totem) {
        return null;
    }


}
