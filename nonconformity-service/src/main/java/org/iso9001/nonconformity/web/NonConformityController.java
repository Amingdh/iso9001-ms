package org.iso9001.nonconformity.web;

import jakarta.validation.Valid;
import org.iso9001.nonconformity.model.NonConformity;
import org.iso9001.nonconformity.service.NonConformityService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/non-conformities")
public class NonConformityController {

    private final NonConformityService service;

    public NonConformityController(NonConformityService service) {
        this.service = service;
    }

    @GetMapping
    public List<NonConformity> list() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public NonConformity get(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public NonConformity create(@Valid @RequestBody NonConformity nc) {
        return service.create(nc);
    }

    @PutMapping("/{id}")
    public NonConformity update(@PathVariable Long id, @Valid @RequestBody NonConformity nc) {
        return service.update(id, nc);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}

