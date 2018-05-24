package domain;

import org.springframework.web.client.RestTemplate;

public class Weer{


    public String getWeer(){
        RestTemplate restTemplate=new RestTemplate();
        Result response = restTemplate.getForObject(
                "http://api.openweathermap.org/data/2.5/weather?q=Overijse,BE&APPID=6e098e94ab58baa297cc50f30b61dfa4",
                Result.class);
        return response.getWeather().get(0).getDescription();
    }

}


