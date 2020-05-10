//IT18125412 T. M. D. D. Thalakumbura
package com.example.demo.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {

    @Id
    private int ProductId;
    private String name;
    private String type; // type of clothing
    private String description;
    private Float BasicPrice;
    private Float discountPercentage;
    private Float MarkedPrice;
    private String imagePath;

    public Product() { }

    public int getProductId() {
        return ProductId;
    }

    public void setProductId(int productId) {
        ProductId = productId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Float getBasicPrice() {
        return BasicPrice;
    }

    public void setBasicPrice(Float basicPrice) {
        BasicPrice = basicPrice;
    }

    public Float getDiscountPercentage() {
        return discountPercentage;
    }

    public void setDiscountPercentage(Float discountPercentage) {
        this.discountPercentage = discountPercentage;
    }

    public Float getMarkedPrice() {
        return MarkedPrice;
    }

    public void setMarkedPrice(Float markedPrice) {
        MarkedPrice = markedPrice;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImagePath() { return imagePath; }

    public void setImagePath(String imagePath) { this.imagePath = imagePath; }

    @Override
    public String toString() {
        return "Product{" +
                "ProductId=" + ProductId +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", BasicPrice=" + BasicPrice +
                ", discountPercentage=" + discountPercentage +
                ", MarkedPrice=" + MarkedPrice +
                '}';
    }
}
