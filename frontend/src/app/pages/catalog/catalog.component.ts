import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryItem } from 'src/app/core/interfaces/category-item.interface';
import { CatalogDataService } from 'src/app/core/services/catalog-data.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  categoryList$!: Observable<CategoryItem[]>;

  constructor(private catalogDataService: CatalogDataService) { }

  ngOnInit(): void {
    this.getCategoryList();    
  }

  getCategoryList(): void {
    this.categoryList$ = this.catalogDataService.getCategoryList();
  }

}
