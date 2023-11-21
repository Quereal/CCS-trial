import { Component } from '@angular/core';

@Component({
    selector: 'app-header-menu',
    templateUrl: './header-menu.component.html',
    styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {
    menuItems: string[] = ['Бизнес', 'О нас', 'Цены', 'Оформить заказ'];
    selectedItem: string = 'Бизнес';
    isMobileMenuOpen: boolean = false;

    selectMenuItem(item: string): void {
        this.selectedItem = item;
    }
  
    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
}