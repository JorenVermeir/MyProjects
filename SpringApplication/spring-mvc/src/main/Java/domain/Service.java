package domain;

import db.PersonDb;
import db.PersonDbInMemory;
import db.StreepjeDb;
import db.dbFactory;
import org.springframework.security.core.GrantedAuthority;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Set;

public class Service{
    @NotNull
    private PersonDb pdb;
    @NotNull
    private StreepjeDb sdb;

    public Service() {
        pdb = dbFactory.getPersonDb("JPA");
        sdb = dbFactory.getStreepjeDb("JPA");
    }
    // Person facade
    public void addPerson(@NotNull @Valid Person p) {
        pdb.add(p);
    }

    public Person getPerson(@Min(0) int id) {
        return pdb.getPerson(id);
    }

    public List<Person> getPersons() {
        return pdb.getAll();
    }

    public void updatePerson(@NotNull @Valid Person person) {
        pdb.update(person);
    }

    public void deletePerson(@Min(0) int personId) {
        pdb.delete(personId);
    }

    public Person loadUserByUsername(@NotNull String totem) {
       Person p = pdb.loadUserByUsername(totem);
       return p;
    }

    //Streepjes facade
    public void addStreepje(@NotNull @Valid Streepje streepje){
        sdb.addStreepje(streepje);
    }

    public Streepje getStreepje(@Min(0) int id){
        return sdb.getStreepje(id);
    }

    public List<Streepje> getStreepjes(){
        return sdb.getAll();
    }

    public List<Streepje> getPersonStreepjes(@Min(0) int userId){
        return sdb.getPersonStreepjes(userId);
    }

    public void updateStreepje(@NotNull @Valid Streepje streepje){
        sdb.updateStreepje(streepje);
    }

    public void deleteStreepje(@Min(0) int id){
        sdb.deleteStreepje(id);
    }

    public void deletePersonStreepjes(@Min(0) int userId){sdb.deletePersonStreepjes(userId);}


}