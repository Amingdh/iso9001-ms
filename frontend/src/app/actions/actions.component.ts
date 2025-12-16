import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActionItem, ApiService } from '../api.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  loading = false;
  items: ActionItem[] = [];

  form = this.fb.group({
    nonConformityId: ['', Validators.required],
    title: ['', Validators.required],
    description: [''],
    owner: ['']
  });

  constructor(private api: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.api.listActions().subscribe({
      next: data => {
        this.items = data;
        this.loading = false;
      },
      error: () => (this.loading = false)
    });
  }

  submit() {
    if (this.form.invalid) return;
    const payload: ActionItem = { ...this.form.value } as ActionItem;
    this.api.createAction(payload).subscribe({
      next: () => {
        this.form.reset();
        this.refresh();
      }
    });
  }
}

