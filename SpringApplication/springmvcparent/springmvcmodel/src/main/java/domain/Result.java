package domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Result {

   private List<WeatherResult> weather;

    public List<WeatherResult> getWeather() {
        return weather;
    }

    public void setWeather(List<WeatherResult> weather) {
        this.weather = weather;
    }
}