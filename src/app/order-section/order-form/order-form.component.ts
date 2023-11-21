import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-order-form',
    templateUrl: './order-form.component.html',
    styleUrls: ['./order-form.component.scss']
})

export class OrderFormComponent {
    model: any = {};

    onFileSelected(file: File) {
        this.model.file = file;
    }

    onSubmit(form: NgForm) {
        if (form.valid) {
            console.log('Форма отправлена!', this.model);
        } else {
            console.log('Форма невалидна. Проверьте заполненные поля.');
        }
    }
}
