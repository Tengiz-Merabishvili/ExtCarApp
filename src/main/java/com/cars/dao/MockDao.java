package com.cars.dao;

import com.cars.model.Car;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class MockDao {
    private static Collection<Car> carList = null;


    public MockDao() {
        carList = new ArrayList<>();
        carList.add(new Car(UUID.randomUUID().toString(), "Black", "CRV", "Honda", "AA-111-AA", 1990));
        carList.add(new Car(UUID.randomUUID().toString(), "White", "CLK", "Mercedes", "BB-222-BB", 1995));
        carList.add(new Car(UUID.randomUUID().toString(), "Red", "300", "BMW", "CC-333-CC", 1993));
        carList.add(new Car(UUID.randomUUID().toString(), "Blue", "Lancer", "BMitsubishi", "DD-444-DD", 1993));
    }

    public Collection<Car> getCars() {
        return carList;
    }

    public void add(Car car) {
        carList.add(car);
    }

    public void editCar(String id, Car car) {
        this.remove(id);
        this.add(car);
    }

    public Collection<Car> search(final String searchString) {

        if (searchString == null || searchString.trim().isEmpty()) {
            return carList;
        }

        return carList.stream().filter(c ->
                        compareIgnoreCase(searchString, c.getBrand()) ||
                        compareIgnoreCase(searchString, c.getModel()) ||
                        compareIgnoreCase(searchString, c.getNumber())).collect(Collectors.toList());
    }

    private boolean compareIgnoreCase(String s, Object o) {
        if (s == null && o == null) return true;
        if (s == null || o == null) return false;
        return o.toString().toUpperCase().contains(s.toUpperCase());
    }

    public void remove(String id) {
        Car car = new Car();
        car.setId(id);
        carList.remove(car);
    }
}
