package db;

public class DbFactory {
        public DbFactory(){

    }

    public static PersonDb getPersonDb(String dbType){
        if (dbType.equals("Memory")){
            return new PersonDbInMemory();
        }if (dbType.equals("JPA")){
            return new PersonJpaDatabase();
        }
        return new PersonDbInMemory();
    }
    public static StreepjeDb getStreepjeDb(String dbType){
            if (dbType.equals("Memory")){
                return new StreepjeDbInMemory();
            }if (dbType.equals("JPA")){
                return new StreepjeJpaDatabase();
        }
        return new StreepjeDbInMemory();
    }
}
