package team4.softhouse.db.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.NotEmpty;


public class Inventory {
    @JsonProperty
    private Integer id;

    @JsonProperty
    @NotEmpty
    @Length(max =50 , message = "must not be longer than 50 characters")
    private String name;

    @JsonProperty
    @NotEmpty
    @Length(min = 1, message = "must contain atleast 1 characters")
    private String category;

    @JsonProperty
    @NotEmpty
    private String specifications;

    @JsonProperty
    private Integer quantity;


    public Inventory() {}

    public Inventory(Integer id, String name, String category, String specifications, Integer quantity) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.specifications = specifications;
        this.quantity = quantity;
    }

    public Inventory(String category) {
        this.category = category;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category =category;
    }

    public String getSpecifications() {
        return specifications;
    }

    public void setSpecifications(String specifications) {
        this.specifications = specifications;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}