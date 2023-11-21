import { Component } from '@angular/core';

@Component({
    selector: 'app-order-icon-row',
    templateUrl: './order-icon-row.component.html',
    styleUrls: ['./order-icon-row.component.scss']
})
export class OrderIconRowComponent {
    icons: any[] = [
        { name: 'Seach icon', url: 'assets/icons/search.svg', caption: 'Lorem ipsum dolor sit amet' },
        { name: 'Percent icon', url: 'assets/icons/percent.svg', caption: 'Сonsecteturadipiscing elit' },
        { name: 'File icon', url: 'assets/icons/file.svg', caption: 'Sed do eiusmod tempor' },
        { name: 'Message icon', url: 'assets/icons/message.svg', caption: 'Esse cillum dolore eu fugiat' },
        { name: 'Cash icon', url: 'assets/icons/money.svg', caption: 'Excepteur sint occaecat cupidatat non proident' },
    ];
}
