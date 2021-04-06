import { NgModule }      from '@angular/core';
import { DateObjectPipe }  from './date-object.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:        [CommonModule],
    declarations:   [DateObjectPipe],
    exports:        [DateObjectPipe],
})

export class PipeModule {}