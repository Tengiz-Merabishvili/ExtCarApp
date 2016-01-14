package com.cars.config;

import com.cars.dao.MockDao;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebServiceConfig {

    @Bean
    public MockDao getMockDao() {
        return new MockDao();
    }
}
