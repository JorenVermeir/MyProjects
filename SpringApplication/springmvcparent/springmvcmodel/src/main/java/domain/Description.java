package domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Description {
    private List<Result> results;

    public Description(){
    }
    public List<Result> getResult() {
        return results;
    }
    public void setResults(List<Result> results) {
        this.results = results;
    }
}
