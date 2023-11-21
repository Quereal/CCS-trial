import { Component } from '@angular/core';

@Component({
    selector: 'app-footer-contacts',
    templateUrl: './footer-contacts.component.html',
    styleUrls: ['./footer-contacts.component.scss']
})
export class FooterContactsComponent {
    contactList: any[] = [
        { name: 'info@ipsum228.com', icon: '/assets/icons/email.svg', link: 'mailto:info@ipsum228.com' },
        { name: 'Мы вконтакте', icon: '/assets/icons/vk.svg', link: 'https://vk.com' },
    ]
}
