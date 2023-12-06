import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  categories: string[] = ['Temperature', 'Weight', 'Distance', 'Currency'];

  ngOnInit(): void {
    this.parentForm
      .get('categoryValue')
      ?.valueChanges.subscribe((value) => {
        console.log(`Category changed: ${value}`);
      });
  }
}
