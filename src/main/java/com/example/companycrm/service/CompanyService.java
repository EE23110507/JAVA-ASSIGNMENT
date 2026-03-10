package com.example.companycrm.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.companycrm.model.Company;
import com.example.companycrm.repository.CompanyRepository;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository repository;

    // Create Company
    public Company createCompany(Company company) {
        return repository.save(company);
    }

    // Get All Companies
    public List<Company> getAllCompanies() {
        return repository.findAll();
    }

    // Get Company By ID
    public Company getCompanyById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Company not found"));
    }

    // Update Company
    public Company updateCompany(Long id, Company company) {
        Company existing = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Company not found"));

        existing.setCompanyName(company.getCompanyName());
        existing.setEmail(company.getEmail());
        existing.setPhone(company.getPhone());
        existing.setIndustry(company.getIndustry());
        existing.setGstNumber(company.getGstNumber());
        existing.setAddress(company.getAddress());
        existing.setCity(company.getCity());
        existing.setState(company.getState());
        existing.setCountry(company.getCountry());
        existing.setPostalCode(company.getPostalCode());

        return repository.save(existing);
    }

    // Delete Company
    public void deleteCompany(Long id) {
        repository.deleteById(id);
    }
}