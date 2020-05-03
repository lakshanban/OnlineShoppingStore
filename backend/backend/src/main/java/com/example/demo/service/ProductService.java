//IT18125412 T. M. D. D. Thalakumbura

package com.example.demo.service;

import com.example.demo.model.Product;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

public interface ProductService {

    List<Product> getAllProducts();
    Product getProductById( Product productId);
    Product addProduct(Product product);
    void updateProduct(Product product);
//    void deleteProduct(Product product);
    Float calculateMarkupPrice(Float basicPrice, Float discountAmount);
    // by deducting discounted value

}
