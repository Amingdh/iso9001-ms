package org.iso9001.nonconformity.repository;

import org.iso9001.nonconformity.model.NonConformity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NonConformityRepository extends JpaRepository<NonConformity, Long> {
}

