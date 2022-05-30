import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryItem } from 'src/app/core/interfaces/category-item.interface';
import { CatalogDataService } from 'src/app/core/services/catalog-data.service';

@Component({
  selector: 'app-category-catalog',
  templateUrl: './category-catalog.component.html',
  styleUrls: ['./category-catalog.component.scss']
})
export class CategoryCatalogComponent implements OnInit {
  categoryId!: number;
  categoryTitle!: string;
  productList$!: Observable<any[]>;

  constructor(private catalogDataService: CatalogDataService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['category'];      
    })

    this.getCategory();
    this.getProductList();
  }

  getCategory(): void {
    this.catalogDataService.getCategory(this.categoryId).subscribe(item => {
      this.categoryTitle = item.title;
    });          
  }

  getProductList(): void {
    this.productList$ = this.catalogDataService.getProductList(this.categoryId);     
  }

}
