//IT18125412 T. M. D. D. Thalakumbura
package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import com.example.demo.service.ProductServiceImpl;
import com.example.demo.service.SearchProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    @Autowired
    ProductService productService;

    @RequestMapping(
            path = "/product",
            method = RequestMethod.GET
    )
    List<Product> getAllProducts() {
        return productService.getAllProducts();
    }


    @RequestMapping(
            value = "/product/{ProductId}",
            method = RequestMethod.GET
    )
    Product getProductById(@PathVariable("ProductId") Product productId) {
        return productService.getProductById(productId);
    }

    @RequestMapping(
            value = " ",
            headers = "Content-Type=application/json",
            method = RequestMethod.POST
    )
    ResponseEntity<?> addProduct(@RequestBody Product product) {
        productService.addProduct(product);
        return new ResponseEntity<>("Student added successfully", HttpStatus.OK);
    }

    @RequestMapping(
            value = " ",
            headers = "Content-Type=application/json",
            method = RequestMethod.POST
    )
    ResponseEntity<?> updateProduct(@RequestBody Product product) {
        productService.updateProduct(product);
        return new ResponseEntity<>("Student added successfully", HttpStatus.OK);
    }

//    @RequestMapping(
//            value = " ",
//            headers = "Content-Type=application/json",
//            method = RequestMethod.DELETE
//    )
//    void deleteProduct(@PathVariable("ProductId") Product product) {
//        productService.deleteProduct(product);
//    }

    // Search

//    @Autowired
//    SearchProductService searchProductService;

//    @Autowired
//    private SessionFactory sessionFactory;
//
//    protected Session getSession()
//    {
//        return sessionFactory.getCurrentSession();
//    }
//
//    @RequestMapping(value = "/hotel/search", method = RequestMethod.GET, consumes = { "application/json" })
//    public SearchResult getResultsOfSearch( @RequestBody String searchRequestJson )
//
//    {
//        Search search;
//        ObjectMapper mapper = new ObjectMapper();
//        try
//        {
//
//            search = mapper.readValue( searchRequestJson, Search.class );
//
//            System.out.println( searchService.getSearchResult( search ).getHotelOptions().size() );
//            return searchService.getSearchResult( search );
//
//        }
//        catch ( IOException e )
//        {
//            e.printStackTrace();
//            return null;
//
//        }
//
//    }


}
