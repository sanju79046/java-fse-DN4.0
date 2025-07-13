package com.cognizant.springlearn.service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.exception.CountryNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class CountryService {

    private List<Country> countryList = Arrays.asList(
    new Country("IN", "India"),
    new Country("US", "United States"),
    new Country("JP", "Japan"),
    new Country("DE", "Germany")
);


    public List<Country> getAllCountries() {
        return countryList;
    }

    public Country getCountry(String code) throws CountryNotFoundException {
        return countryList.stream()
            .filter(country -> country.getCode().equalsIgnoreCase(code))
            .findFirst()
            .orElseThrow(() -> new CountryNotFoundException("Country not found"));
    }
}
