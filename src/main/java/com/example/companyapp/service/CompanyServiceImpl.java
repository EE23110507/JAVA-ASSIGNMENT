package com.example.companyapp.service;

import com.example.companyapp.entity.Company;
import com.example.companyapp.repository.CompanyRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {

    private final CompanyRepository repository;

    public CompanyServiceImpl(CompanyRepository repository) {
        this.repository = repository;
    }

    @Override
    public Company createCompany(Company company) {
        return repository.save(company);
    }

    @Override
    public List<Company> getAllCompanies() {
        return repository.findAll();
    }

    @Override
    public Company getCompanyById(Long id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public Company updateCompany(Long id, Company updatedCompany) {

        Company company = repository.findById(id).orElse(null);

        if (company == null) {
            return null;
        }

        company.setCompanyName(updatedCompany.getCompanyName());
        company.setEmail(updatedCompany.getEmail());
        company.setPhone(updatedCompany.getPhone());
        company.setWebsite(updatedCompany.getWebsite());
        company.setIndustry(updatedCompany.getIndustry());
        company.setGstNumber(updatedCompany.getGstNumber());
        company.setAddress(updatedCompany.getAddress());
        company.setCity(updatedCompany.getCity());
        company.setState(updatedCompany.getState());
        company.setCountry(updatedCompany.getCountry());
        company.setPostalCode(updatedCompany.getPostalCode());
        company.setStatus(updatedCompany.getStatus());

        return repository.save(company);
    }

    @Override
    public void deleteCompany(Long id) {
        repository.deleteById(id);
    }
}