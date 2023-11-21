import { Component, Input } from '@angular/core';

type ButtonType = "primary" | "secondary";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() btnStyle: ButtonType = 'primary'; // принимает значения "primary" или "secondary" по умолчанию
    @Input() type: string = 'button';
}
