//IT18125412 T. M. D. D. Thalakumbura

package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.repo.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
     ProductRepo productRepo;

    @Override
    public List<Product> getAllProducts() {
//        return productRepo.findAll();
        return productRepo.getAllProducts();

    }

    @Override
    public Product getProductById(Product productId) {
        return productRepo.getProductById(productId);
    }

    @Override
    public Product addProduct(Product product) {
        return productRepo.save(product);
    }

    @Override
    public void updateProduct(Product product) {
         productRepo.updateProduct(product);
    }

//    @Override
//    public void deleteProduct(Product product) {
//        productRepo.deleteProduct(product);
//    }

    @Override
    public Float calculateMarkupPrice(Float basicPrice, Float discountAmount) {
        return basicPrice - (basicPrice * (discountAmount / 100));
    }
}
