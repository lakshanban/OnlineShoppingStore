//IT18125412 T. M. D. D. Thalakumbura
package com.example.demo.repo;

import com.example.demo.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepo extends MongoRepository<Product, String> {




    
//    Product getProductById(Product productId);
//    Product addProduct(Product product);
//    void updateProduct(Product product);
//    List<Product> getAllProducts();
//    Product getProductById(@Param("ProductId") Product productId);
//    Product addProduct(@Param("ProductId") Product product);
//    void updateProduct(@Param("ProductId") Product product);
//    void deleteProduct(@Param("ProductId") Product product);
}
