import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService, NonConformity } from '../api.service';

@Component({
  selector: 'app-nonconformities',
  templateUrl: './nonconformities.component.html',
  styleUrls: ['./nonconformities.component.scss']
})
export class NonconformitiesComponent implements OnInit {
  loading = false;
  items: NonConformity[] = [];

  form = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    severity: ['MEDIUM'],
    assignedTo: [''],
    dueDate: ['']
  });

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.api.listNonConformities().subscribe({
      next: data => {
        this.items = data;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  submit() {
    if (this.form.invalid) return;
    const payload: NonConformity = {
      ...this.form.value,
      severity: this.form.value.severity || 'MEDIUM'
    } as NonConformity;
    this.api.createNonConformity(payload).subscribe({
      next: () => {
        this.form.reset({ severity: 'MEDIUM' });
        this.refresh();
      }
    });
  }
}

