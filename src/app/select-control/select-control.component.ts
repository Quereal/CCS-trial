import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-select-control',
    templateUrl: './select-control.component.html',
    styleUrls: ['./select-control.component.scss'],
    providers: [{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectControlComponent),
      multi: true
    }]
})

export class SelectControlComponent implements ControlValueAccessor {
    
    constructor(private _elementRef: ElementRef) {}

    @Input() name?: string;
    @Input() options: string[] = [];
    @Input() placeholder: string = '';

    @Output() optionSelected = new EventEmitter<string>();

    @HostBinding('attr.required') @Input() required?: string;
    @HostBinding('attr.disabled') @Input() disabled?: string;
    
    value?: string;
    selectedOption: string = '';
    isOpen: boolean = false;

    onChange: any = () => {};
    onTouched: any = () => {};

    writeValue(value: any) {
        this.selectedOption = value;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }
  
    registerOnTouched(fn: any) {
        this.onTouched = fn;
    }

    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }
  
    closeDropdown() {
        this.isOpen = false;
    }
  
    onSelectChange(option: any) {
        this.selectedOption = option;
        this.optionSelected.emit(this.selectedOption);
        this.onChange(this.selectedOption);
        this.isOpen = false;
    }

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        if (!this._elementRef.nativeElement.contains(event.target)) {
            this.closeDropdown();
        }
    }
}
