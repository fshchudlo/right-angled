import { Component } from '@angular/core';
import { OperationStatusStream } from '../providers/list';
import { OperationStatus } from '../../core/operation-status';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'rt-status-progress',
    template: `
        <ng-content *ngIf="(isVisible$ | async)"></ng-content>
    `
})
export class StatusInProgressComponent {
    public isVisible$: Observable<boolean>;
    constructor(trackedStatusObject: OperationStatusStream) {
        this.isVisible$ = trackedStatusObject.status$.pipe(map(status => status === OperationStatus.Progress));
    }
}
