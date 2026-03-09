package com.crm.companybackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.crm.companybackend.entity.Company;

public interface CompanyRepository extends JpaRepository<Company, Long> {
}