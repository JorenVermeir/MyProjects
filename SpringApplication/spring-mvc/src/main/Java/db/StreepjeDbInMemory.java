package db;

import domain.Streepje;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class StreepjeDbInMemory implements StreepjeDb {
   private Map<Integer, Streepje> db;
   
   
   public StreepjeDbInMemory(){
       db = new LinkedHashMap<Integer, Streepje>();
   }
   

    public Streepje getStreepje(int streepjeId) {
        if (streepjeId < 0){
            throw new DbException("Empty streepjeId given");
        }
        return db.get(streepjeId);
    }


    public List<Streepje> getAll() {
        List<Streepje> l = new ArrayList<Streepje>(db.values());
        return l;
    }


    public List<Streepje> getPersonStreepjes(int userID) {
       ArrayList<Streepje> personStreepjes = new ArrayList<Streepje>();
        List<Streepje> l = new ArrayList<Streepje>(db.values());
        for (Streepje streepje:l) {
            if (streepje.getUserid() == userID){
                personStreepjes.add(streepje);
            }
        }
        return personStreepjes;
    }


    public void addStreepje(Streepje streepje) {
        if (streepje == null){
            throw new DbException("Empty Streepje given addStreepje");
        }
        List<Streepje> streepjes = getPersonStreepjes(streepje.getUserid());
        boolean found = false;
        for (Streepje streepje1:streepjes) {
                if(streepje.getDate().isEqual(streepje1.getDate())){
                    int  totaal = streepje1.getQuantity() + streepje.getQuantity();
                    Streepje s = new Streepje(streepje1.getUserid(), streepje1.getDate() ,totaal, streepje1.getStreepjeid());
                    db.put(s.getStreepjeid(), s);
                    found = true;
                    break;
                }
        }
        if (!found){
            int id = db.size();
            Streepje s = new Streepje(streepje.getUserid(), streepje.getDate(), streepje.getQuantity(), id);
            db.put(id, s);
        }
    }


    public void updateStreepje(Streepje streepje) {
        if (streepje == null){
            throw new  DbException("Empty streepje given updateStreepje");
        }
        db.put(streepje.getStreepjeid(), streepje);
    }


    public void deleteStreepje(int streepjeId) {
        if (streepjeId < 0){
            throw new DbException("Empty streepjeId given");
        }
        db.remove(streepjeId);
    }
    public void deletePersonStreepjes(int userid){
       List<Streepje> s = getPersonStreepjes(userid);
        for (Streepje streepje:
             s) {
            db.remove(streepje.getStreepjeid());
        }
    }
}
