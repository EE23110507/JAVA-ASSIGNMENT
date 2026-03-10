package com.example.companycrm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.companycrm.model.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {

}