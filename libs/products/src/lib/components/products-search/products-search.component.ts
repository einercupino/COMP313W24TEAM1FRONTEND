import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'products-search',
    templateUrl: './products-search.component.html',
    styles: []
})
export class ProductsSearchComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {
        // clear search input
        const searchInput = document.getElementById('searchInput') as HTMLInputElement;
        searchInput.value = '';
    }

    searchProducts(event: any) {
        const keyword = event.target.value;
        // debounce search
        setTimeout(() => {
            this.router.navigateByUrl(`/products/${keyword}`);
        }, 1000);
    }
}
