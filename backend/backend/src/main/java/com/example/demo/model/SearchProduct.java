//IT18125412 T. M. D. D. Thalakumbura
// This is for the search feature
// Will be mainly available in the home
// Expected to be capable of searching through database
package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


//@Document(collection = "product")
public class SearchProduct {

    @Id
    private int Id;
    private int Name;
    private String type;
    private double priceMinimum;
    private double priceMaximum;
    // maybe will add gender but for now will not since I'm not sure if i can create the business logic of it within the time period


    public SearchProduct(int id, int name, String type, double priceMinimum, double priceMaximum) {
        Id = id;
        Name = name;
        this.type = type;
        this.priceMinimum = priceMinimum;
        this.priceMaximum = priceMaximum;
    }

    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }

    public int getName() {
        return Name;
    }

    public void setName(int name) {
        Name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getPriceMinimum() {
        return priceMinimum;
    }

    public void setPriceMinimum(double priceMinimum) {
        this.priceMinimum = priceMinimum;
    }

    public double getPriceMaximum() {
        return priceMaximum;
    }

    public void setPriceMaximum(double priceMaximum) {
        this.priceMaximum = priceMaximum;
    }

    @Override
    public String toString() {
        return "SearchProduct{" +
                "Id=" + Id +
                ", Name=" + Name +
                ", type='" + type + '\'' +
                ", priceMinimum=" + priceMinimum +
                ", priceMaximum=" + priceMaximum +
                '}';
    }
}
