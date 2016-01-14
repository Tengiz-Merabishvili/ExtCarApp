package com.cars.model;

public class Car {
    private String id;

    private String colour;

    private String model;

    private String brand;

    private int year;

    private String number;

    public Car() {
    }

    public Car(String colour, String model, String brand, String number, int year) {
        this.colour = colour;
        this.model = model;
        this.brand = brand;
        this.number = number;
        this.year = year;
    }

    public Car(String id, String colour, String model, String brand, String number, int year) {
        this.id = id;
        this.colour = colour;
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.number = number;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getColour() {
        return colour;
    }

    public void setColour(String colour) {
        this.colour = colour;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Car car = (Car) o;

        return id != null ? id.equals(car.id) : car.id == null;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
