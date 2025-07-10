package com.cognizant.springlearn.service;

import java.io.InputStream;
import java.util.List;
import java.util.Optional;

import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.Unmarshaller;


import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.model.CountryList;

@Service
public class CountryService {

    public Country getCountry(String code) throws Exception {
        // Load country.xml
        InputStream inputStream = getClass().getResourceAsStream("/country.xml");

        JAXBContext context = JAXBContext.newInstance(CountryList.class);
        Unmarshaller unmarshaller = context.createUnmarshaller();
        CountryList countryList = (CountryList) unmarshaller.unmarshal(inputStream);

        // Search for country with matching code (case-insensitive)
        Optional<Country> match = countryList.getCountryList()
            .stream()
            .filter(c -> c.getCode().equalsIgnoreCase(code))
            .findFirst();

        if (match.isPresent()) {
            return match.get();
        } else {
            throw new Exception("Country not found with code: " + code);
        }
    }
}
