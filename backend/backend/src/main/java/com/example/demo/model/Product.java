//IT18125412 T. M. D. D. Thalakumbura
package com.example.demo.model;
import java.util.ArrayList;

import java.util.Hashtable;
import java.util.List;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.requesBodies.Comment;

@Document
public class Product {
	
	@Id
	private String pid;
	
	private String pname;
	private String pdescription;
	private double pdiscount;
	private double pprice;
	private String powner;
	private String pcategory;
	private List<Binary> pimages;
	private List<Double> pratings;
	private List<Comment> pcomment;
	
	
	
	public Product(String pname, String pdescription, double pdiscount, double pprice, String powner, String pcategory) {

		this.pname = pname;
		this.pdescription = pdescription;
		this.pdiscount = pdiscount;
		this.pprice = pprice;
		this.powner = powner;
		this.pcategory= pcategory;
	    this.pimages= new ArrayList<Binary>();
		this.pratings= new ArrayList<>();
		this.pcomment= new ArrayList<>();
		
	}
	
	public String getId() {
		
		return this.pid;
	}
	
	
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getPdescription() {
		return pdescription;
	}
	public void setPdescription(String pdescription) {
		this.pdescription = pdescription;
	}
	public double getPdiscount() {
		return pdiscount;
	}
	public void setPdiscount(double pdiscount) {
		this.pdiscount = pdiscount;
	}
	public double getPprice() {
		return pprice;
	}
	public void setPprice(double pprice) {
		this.pprice = pprice;
	}
	public String getPowner() {
		return powner;
	}
	public void setPowner(String powner) {
		this.powner = powner;
	}
	public List<Binary> getPimages() {
		return this.pimages;
	}
	public void setPimages(Binary file) {
		this.pimages.add(file);
	}
	
	public void setPcomments(Comment comment) {
		this.pcomment.add(comment);
		
	}
	
	public List<Comment> getComments(){
		
		return this.pcomment;
	}
	
	public void setPcomments(Double Rating) {
		this.pratings.add(Rating);
		
	}
	
	public List<Double> getPratings(){
		
		return this.pratings;
	}

	public String getPcategory() {
		return pcategory;
	}

	public void setPcategory(String pcategory) {
		this.pcategory = pcategory;
	}
	

}
