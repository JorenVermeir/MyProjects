package db;

import domain.Streepje;

import java.util.List;

public interface StreepjeDb {
    Streepje getStreepje(int streepjeId);
    List<Streepje> getAll();
    List<Streepje> getPersonStreepjes(int userID);
    void addStreepje(Streepje streepje);

    void updateStreepje(Streepje streepje);

    void deleteStreepje(int streepjeId);
    void deletePersonStreepjes(int userId);
}
