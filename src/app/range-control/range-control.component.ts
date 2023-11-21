import { Component, Input, forwardRef, Provider } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

const RANGE_CONTROL_VALUE_ACCESSOR: Provider = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RangeControlComponent),
    multi: true
};

@Component({
    selector: 'app-range-control',
    templateUrl: './range-control.component.html',
    styleUrls: ['./range-control.component.scss'],
    providers: [RANGE_CONTROL_VALUE_ACCESSOR]
})

export class RangeControlComponent implements ControlValueAccessor {
    @Input() name?: string;
    @Input() id?: string;
    sliderValue?: number;
    onChange: any = () => {};
    onTouched: any = () => {};

    writeValue(value: any = 50): void {
        this.sliderValue = value;
        this.onChange(this.sliderValue);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    onRangeChange(event: Event): void {
        const target = event.target as HTMLInputElement;
        const numericValue = parseInt(target.value, 10);
        this.onChange(numericValue);
        this.sliderValue = numericValue;
    }
}