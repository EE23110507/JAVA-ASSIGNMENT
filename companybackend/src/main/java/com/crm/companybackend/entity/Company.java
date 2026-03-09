package com.crm.companybackend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="companies")
public class Company {

@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long id;

private String companyName;
private String email;
private String phone;
private String website;
private String industry;
private String gstNumber;
private String address;
private String city;
private String state;
private String country;
private String postalCode;
private String status;

}