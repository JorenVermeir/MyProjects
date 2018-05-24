package domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@Entity
public class Streepje {
    @Id
    @GeneratedValue
    @NotNull(message = "id can't  be null")
    private int streepjeid;
    @NotNull(message = "userid can't be null")
    private int userid;
    private LocalDate date;
    @Min(1)
    private int quantity;

    //nieuwe
    public Streepje(int userid, int quantity, LocalDate date) {
        setUserid(userid);
        setDate(date);
        setQuantity(quantity);
    }
    //halen uit databank
    public Streepje(int userid, LocalDate date, int quantity, int streepjeid) {
        setUserid(userid);
        setDate(date);
        setQuantity(quantity);
        setStreepjeid(streepjeid);
    }
    public Streepje(){

    }
    public int getUserid() {
        return userid;
    }

    public int getStreepjeid() {
        return streepjeid;
    }

    public void setStreepjeid(int streepjeid) {
        this.streepjeid = streepjeid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public LocalDate getDate() {
        return date;
    }
    public void setExistingDate(LocalDate date){
        this.date = date;
    }

    public void setDate(LocalDate date) {
        if (date == null){
            this.date = LocalDate.now();
        }else{
            this.date = date;
        }
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        if(quantity < 1 ) {
            throw new IllegalArgumentException("Quantity given below 1");
        }
        this.quantity = quantity;
    }


}
