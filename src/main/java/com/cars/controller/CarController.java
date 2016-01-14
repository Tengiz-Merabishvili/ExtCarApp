package com.cars.controller;

import com.cars.dao.MockDao;
import com.cars.model.Car;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class CarController {
    @Autowired
    MockDao dao;


    //TODO - Implement server side search
//    @RequestMapping(value = "/cars", method = RequestMethod.GET)
//    public Collection<Car> searchCars(@RequestParam String searchString) {
//        return dao.search(searchString);
//    }

    @RequestMapping(value = "/cars", method = RequestMethod.GET)
    public Collection<Car> getCars() {
        return dao.getCars();
    }

    @RequestMapping(value = "/cars", method = RequestMethod.POST)
    public void addCar(@RequestBody Car car) {
        dao.add(car);
    }

    @RequestMapping(value = "/cars/{id}", method = RequestMethod.DELETE)
    public void removeCar(@PathVariable(value = "id") String id) {
        dao.remove(id);
        System.out.println("id = " + id);
    }

    @RequestMapping(value = "/cars/{id}", method = RequestMethod.PUT)
    public void editCar(@PathVariable(value = "id") String id, @RequestBody Car car) {
        dao.editCar(id, car);
        System.out.println("id = " + id);
        System.out.println("car = " + car);
    }
}
