package com.example.companyapp.controller;

import com.example.companyapp.entity.Company;
import com.example.companyapp.service.CompanyService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/companies")
@CrossOrigin(origins = "http://localhost:3000")
public class CompanyController {

    private final CompanyService service;

    public CompanyController(CompanyService service) {
        this.service = service;
    }

    @PostMapping
    public Company createCompany(@Valid @RequestBody Company company) {
        return service.createCompany(company);
    }

    @GetMapping
    public List<Company> getAllCompanies() {
        return service.getAllCompanies();
    }

    @GetMapping("/{id}")
    public Company getCompanyById(@PathVariable Long id) {
        return service.getCompanyById(id);
    }

    @PutMapping("/{id}")
    public Company updateCompany(@PathVariable Long id,
                                 @Valid @RequestBody Company company) {
        return service.updateCompany(id, company);
    }

    @DeleteMapping("/{id}")
    public void deleteCompany(@PathVariable Long id) {
        service.deleteCompany(id);
    }
}