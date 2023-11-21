import { Component } from '@angular/core';

@Component({
    selector: 'app-footer-payments',
    templateUrl: './footer-payments.component.html',
    styleUrls: ['./footer-payments.component.scss']
})
export class FooterPaymentsComponent {
    paymentList: any[] = [
        { name: 'QIWI wallet', icon: '/assets/icons/qiwi.svg' },
        { name: 'Yandex Money', icon: '/assets/icons/ymoney.svg' },
        { name: 'Web Money', icon: '/assets/icons/wmoney.svg' },
    ]
}
