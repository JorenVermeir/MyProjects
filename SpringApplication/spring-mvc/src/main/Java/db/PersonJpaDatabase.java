package db;

import domain.Person;
import domain.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

public class PersonJpaDatabase implements PersonDb  {
    private EntityManagerFactory entityManagerFactory;
    private EntityManager entityManager;

    public PersonJpaDatabase(){
        entityManagerFactory = Persistence.createEntityManagerFactory("StreepjesPU");
        entityManager = entityManagerFactory.createEntityManager();
    }

    @Override
    public List<Person> getAll() {
        Query query = entityManager.createQuery("SELECT p FROM Person p", Person.class);
        return (List<Person>) query .getResultList();
    }

    @Override
    public Person getPerson(int id) {
        Person p = entityManager.find(Person.class, id);
        return p;
    }

    @Override
    public void add(@NotNull @Valid Person person) {

        Role role = new Role(person.getId(), person.getTotem(), "USER");

        entityManager.getTransaction().begin();
        entityManager.persist(person);
        entityManager.persist(role);
        entityManager.getTransaction().commit();
    }

    @Override
    public void update(@NotNull @Valid Person person) {
        entityManager.getTransaction().begin();
        entityManager.merge(person);
        entityManager.getTransaction().commit();
    }

    @Override
    public void delete(int personId) {
    Person p = entityManager.find(Person.class, personId);
    entityManager.getTransaction().begin();
    entityManager.remove(p);
    entityManager.getTransaction().commit();
    }

    @Override
    public Person loadUserByUsername(@NotNull String totem) {
        List<Person> persons = getAll();
        for (Person p:
             persons) {
            if (p.getTotem().equals(totem)){
                return p;
            }
        }
        return null;
    }


}
