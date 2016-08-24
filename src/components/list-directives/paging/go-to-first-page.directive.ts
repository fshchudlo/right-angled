import { RtListService } from '../list-service';
import { GoToControlBase } from './go-to-control-base';

import { Directive, ElementRef, HostBinding, HostListener, Input, KeyValueDiffers, Renderer } from '@angular/core';
import { PagedPager } from 'e2e4';

@Directive({
    selector: '[rtGoToFirstPage]'
})
export class GoToFirstPageDirective extends GoToControlBase {
    @Input() public disabledCls: string;

    constructor(private listService: RtListService, pager: PagedPager, differs: KeyValueDiffers, elementRef: ElementRef, renderer: Renderer) {
        super(renderer, pager, differs, elementRef);
    }
    @HostListener('click')
    public goToFirstPage(): void {
        if (this.pager.tryMoveToFirstPage()) {
            this.listService.loadData();
        }
    }
    @HostBinding('attr.disabled')
    public get disabled(): boolean {
        return this.innerDisabled;
    }
    public isDisabled(): boolean {
        return this.pager.pageNumber === 1;
    }
}
