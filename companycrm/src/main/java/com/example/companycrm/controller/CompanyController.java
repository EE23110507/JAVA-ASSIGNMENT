package com.example.companycrm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.companycrm.model.Company;
import com.example.companycrm.service.CompanyService;

@RestController
@RequestMapping("/api/companies")
@CrossOrigin
public class CompanyController {

    @Autowired
    private CompanyService service;

    // Create Company
    @PostMapping
    public Company createCompany(@RequestBody Company company) {
        return service.createCompany(company);
    }

    // Get All Companies
    @GetMapping
    public List<Company> getAllCompanies() {
        return service.getAllCompanies();
    }

    // Get Company By ID
    @GetMapping("/{id}")
    public Company getCompanyById(@PathVariable Long id) {
        return service.getCompanyById(id);
    }

    // Update Company
    @PutMapping("/{id}")
    public Company updateCompany(@PathVariable Long id,
                                 @RequestBody Company company) {
        return service.updateCompany(id, company);
    }

    // Delete Company
    @DeleteMapping("/{id}")
    public void deleteCompany(@PathVariable Long id) {
        service.deleteCompany(id);
    }
}



