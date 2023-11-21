import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent {
    @Output() fileSelected = new EventEmitter<File>();
    fileControl = new FormControl();

    onFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length) {
            const file = input.files[0];
            this.fileControl.setValue(file);
            this.fileSelected.emit(file);
        }
    }

    getFileSize(sizeInBytes: number): string {
        const kilobytes = sizeInBytes / 1024;
        if (kilobytes < 1024) {
            return kilobytes.toFixed(2) + ' KB';
        } else {
            const megabytes = kilobytes / 1024;
            return megabytes.toFixed(2) + ' MB';
        }
    }
}