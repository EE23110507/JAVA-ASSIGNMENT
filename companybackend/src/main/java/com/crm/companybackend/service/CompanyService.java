package com.crm.companybackend.service;

import org.springframework.stereotype.Service;
import java.util.List;
import com.crm.companybackend.repository.CompanyRepository;
import com.crm.companybackend.entity.Company;

@Service
public class CompanyService {

private final CompanyRepository repo;

public CompanyService(CompanyRepository repo){
this.repo = repo;
}

public Company createCompany(Company company){
return repo.save(company);
}

public List<Company> getAllCompanies(){
return repo.findAll();
}

public Company getCompanyById(Long id){
return repo.findById(id).orElseThrow();
}

public Company updateCompany(Long id, Company company){
company.setId(id);
return repo.save(company);
}

public void deleteCompany(Long id){
repo.deleteById(id);
}

}