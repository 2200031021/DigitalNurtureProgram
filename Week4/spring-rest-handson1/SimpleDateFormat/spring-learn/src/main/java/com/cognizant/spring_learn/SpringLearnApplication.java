package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class SpringLearnApplication {

    public static void main(String[] args) {
        System.out.println("SpringLearnApplication started...");
        SpringApplication.run(SpringLearnApplication.class, args);

        // Call displayDate after Spring Boot starts
        displayDate();
    }

    public static void displayDate() {
        // Load Spring XML context
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");

        // Get SimpleDateFormat bean
        SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);

        try {
            Date parsedDate = format.parse("31/12/2018");
            System.out.println("Parsed Date: " + parsedDate);
        } catch (Exception e) {
            System.err.println("Date parsing failed: " + e.getMessage());
        }
    }
}
