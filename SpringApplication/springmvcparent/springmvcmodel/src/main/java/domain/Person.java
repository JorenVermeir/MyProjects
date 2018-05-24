package domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Person {
    @Id
    @GeneratedValue
    @NotNull(message = "id can't be null")
    private int id;
    @NotNull(message = "firstName can't be null")
    @Size(min = 1, max = 20)
    private String firstName;
    @NotNull(message = "lastName can't be null")
    @Size(min = 1, max = 20, message = "Lastname must be longer then 1 character and smaller then 20 characters.")
    private String lastName;
    @NotNull(message = "totem can't be null")
    private String totem;
    @Size(min = 5)
    @JsonIgnore
    private String password;
    @JsonIgnore
    private  boolean trustEveryone;

    public Person(int id, String firstName, String lastName, String totem, boolean trustEveryone) {
        setId(id);
        setFirstName(firstName);
        setLastName(lastName);
        setTotem(totem);
        setTrustEveryone(trustEveryone);

    }

    public Person(String firstName, String lastName, String totem, String password) {
        setFirstName(firstName);
        setLastName(lastName);
        setTotem(totem);
        setPassword(password);
        setTrustEveryone(true);
    }

    public Person(){

    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) { this.password = passwordencoder().encode(password); }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String voornaam) { this.firstName = voornaam; }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String achternaam) { this.lastName = achternaam; }

    public String getTotem() {
        return totem;
    }

    public void setTotem(String totem) { this.totem = totem; }

    public boolean isTrustEveryone() {
        return trustEveryone;
    }

    public void setTrustEveryone(boolean vertrouwIedereen) { this.trustEveryone = vertrouwIedereen; }

    public PasswordEncoder passwordencoder(){
        return new BCryptPasswordEncoder();
    }
}
