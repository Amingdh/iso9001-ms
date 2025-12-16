package org.iso9001.nonconformity.service;

import org.iso9001.nonconformity.model.NonConformity;
import org.iso9001.nonconformity.repository.NonConformityRepository;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class NonConformityService {

    private final NonConformityRepository repository;

    public NonConformityService(NonConformityRepository repository) {
        this.repository = repository;
    }

    public List<NonConformity> findAll() {
        return repository.findAll();
    }

    public NonConformity findById(Long id) {
        return repository.findById(id).orElseThrow(() -> new IllegalArgumentException("NonConformity not found"));
    }

    public NonConformity create(NonConformity nc) {
        nc.setId(null);
        nc.setCreatedAt(Instant.now());
        nc.setUpdatedAt(Instant.now());
        return repository.save(nc);
    }

    public NonConformity update(Long id, NonConformity input) {
        NonConformity existing = findById(id);
        existing.setTitle(input.getTitle());
        existing.setDescription(input.getDescription());
        existing.setSeverity(input.getSeverity());
        existing.setStatus(input.getStatus());
        existing.setAssignedTo(input.getAssignedTo());
        existing.setDueDate(input.getDueDate());
        existing.setActionId(input.getActionId());
        existing.setUpdatedAt(Instant.now());
        return repository.save(existing);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}

