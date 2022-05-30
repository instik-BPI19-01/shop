import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProductItem } from "../interfaces/product-item.interface";
import { CatalogDataService } from "../services/catalog-data.service";


@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductItem> {

  constructor (private catalogDataService: CatalogDataService) {}

  resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): 
    ProductItem | Observable<ProductItem> | Promise<ProductItem> {
      return this.catalogDataService.getProductItem(+route.params['id']);
  }  
}