package com.crm.companybackend.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.crm.companybackend.service.CompanyService;
import com.crm.companybackend.entity.Company;

@RestController
@RequestMapping("/api/companies")
@CrossOrigin("*")

public class CompanyController {

private final CompanyService service;

public CompanyController(CompanyService service){
this.service = service;
}

@PostMapping
public Company createCompany(@RequestBody Company company){
return service.createCompany(company);
}

@GetMapping
public List<Company> getAllCompanies(){
return service.getAllCompanies();
}

@GetMapping("/{id}")
public Company getCompany(@PathVariable Long id){
return service.getCompanyById(id);
}

@PutMapping("/{id}")
public Company updateCompany(@PathVariable Long id,@RequestBody Company company){
return service.updateCompany(id,company);
}

@DeleteMapping("/{id}")
public void deleteCompany(@PathVariable Long id){
service.deleteCompany(id);
}

}