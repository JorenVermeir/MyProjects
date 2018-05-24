package db;

import domain.Streepje;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

public class StreepjeJpaDatabase implements StreepjeDb {
    private EntityManagerFactory entityManagerFactory;
    private EntityManager entityManager;

    public StreepjeJpaDatabase(){
        entityManagerFactory = Persistence.createEntityManagerFactory("StreepjesPU");
        entityManager = entityManagerFactory.createEntityManager();
    }


    public Streepje getStreepje(int streepjeId) {
        Streepje s = entityManager.find(Streepje.class, streepjeId);
        return s;
    }


    public List<Streepje> getAll() {
        Query query = entityManager.createQuery("SELECT s FROM Streepje s", Streepje.class);
        return (List<Streepje>) query .getResultList();

    }


    public List<Streepje> getPersonStreepjes(@Min(0) int userID) {
        ArrayList<Streepje> personStreepjes = new ArrayList<Streepje>();
        Query query = entityManager.createQuery("SELECT s FROM Streepje s", Streepje.class);
        List<Streepje> l = query .getResultList();
        for (Streepje streepje:l) {
            if (streepje.getUserid() == userID){
                personStreepjes.add(streepje);
            }
        }
        return personStreepjes;
    }


    public void addStreepje(@NotNull @Valid Streepje streepje) {

        List<Streepje> streepjes = getPersonStreepjes(streepje.getUserid());
        boolean found = false;
        for (Streepje streepje1:streepjes) {
            if(streepje.getDate().isEqual(streepje1.getDate())){
                int  totaal = streepje1.getQuantity() + streepje.getQuantity();
                Streepje s = new Streepje(streepje1.getUserid(), streepje1.getDate() ,totaal, streepje1.getStreepjeid());
                updateStreepje(s);
                found = true;
                break;
            }
        }
        if (!found){
            entityManager.getTransaction().begin();
            entityManager.persist(streepje);
            entityManager.getTransaction().commit();
        }
    }


    public void updateStreepje(@NotNull @Valid Streepje streepje) {
        entityManager.getTransaction().begin();
        entityManager.merge(streepje);
        entityManager.getTransaction().commit();
    }


    public void deleteStreepje(@Min(0) int streepjeId) {
    Streepje s = entityManager.find(Streepje.class, streepjeId);
        entityManager.getTransaction().begin();
        entityManager.remove(s);
        entityManager.getTransaction().commit();
    }

    public void deletePersonStreepjes(@Min(0) int userId){
       Query q = entityManager.createQuery("Delete from Streepje s WHERE userid = " + userId);
        q.executeUpdate();
    }

}

