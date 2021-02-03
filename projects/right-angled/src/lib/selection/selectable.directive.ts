import { Directive, ElementRef, EventEmitter, HostListener, Input, Optional, Output, Renderer2, SkipSelf } from '@angular/core';
import { RTSelectionEventsHelper } from './providers/selection-events-helper';
import { RTSelectionEvent, SelectionElementEventsEmitter } from './providers/selection-events-emitter';
import { SelectionAreaDirective } from './selection-area.directive';

@Directive({
    exportAs: 'rtSelectable',
    selector: '[rtSelectable]'
})
export class SelectableDirective implements SelectionElementEventsEmitter {
    public static settings: { selectedClassName: string } = {
        selectedClassName: 'rt-selected'
    };
    public index: number = null;
    @Input('rtSelectable') public item: any = null;
    @Output() public readonly selectedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() public readonly itemSelected: EventEmitter<RTSelectionEvent> = new EventEmitter<RTSelectionEvent>();
    @Output() public readonly itemDeselected: EventEmitter<RTSelectionEvent> = new EventEmitter<RTSelectionEvent>();
    @Output() public readonly selectionChanged: EventEmitter<RTSelectionEvent> = new EventEmitter<RTSelectionEvent>();
    private selectedInternal = false;
    constructor(
        @Optional() private selectionArea: SelectionAreaDirective,
        @SkipSelf()
        public selectionEventsHelper: RTSelectionEventsHelper,
        private renderer: Renderer2,
        private el: ElementRef
    ) {}

    @Input()
    public get selected(): boolean {
        return this.selectedInternal;
    }
    public set selected(selected: boolean) {
        if (selected) {
            this.selectionEventsHelper.selectionService.selectIndex(this.index, this.selectionEventsHelper.multiple);
        } else {
            this.selectionEventsHelper.selectionService.deselectIndex(this.index);
        }
    }

    ngAfterViewInit() {
        this.selectionArea?.registerSelectable(this, this.el);
    }

    ngOnDestroy() {
        this.selectionArea?.unregisterSelectable(this);
    }

    @HostListener('mouseup', ['$event.ctrlKey', '$event.shiftKey', '$event.which', '$event.preventDefault', '$event.stopPropagation', '$event'])
    public mouseUpHandler(
        ctrlKeyPressed: boolean,
        shiftKeyPressed: boolean,
        mouseButton: number,
        preventDefaultFn: () => void,
        stopPropagationFn: () => void,
        executionContext: any
    ): void {
        if (this.selectionEventsHelper.mouseHandler(ctrlKeyPressed, shiftKeyPressed, mouseButton, this.index)) {
            this.clearWindowSelection();
            if (this.selectionEventsHelper.preventEventsDefaults && preventDefaultFn) {
                preventDefaultFn.call(executionContext);
            }
            if (this.selectionEventsHelper.stopEventsPropagation && stopPropagationFn) {
                stopPropagationFn.call(executionContext);
            }
        }
    }
    public postProcessSelection(selected: boolean): void {
        if (selected === this.selected) {
            return;
        }
        this.selectedInternal = selected;
        this.selectedChange.emit(this.selectedInternal);
        if (SelectableDirective.settings.selectedClassName) {
            if (this.selected) {
                this.renderer.addClass(this.el.nativeElement, SelectableDirective.settings.selectedClassName);
            } else {
                this.renderer.removeClass(this.el.nativeElement, SelectableDirective.settings.selectedClassName);
            }
        }
    }
    public clearWindowSelection(): void {
        try {
            window.getSelection().removeAllRanges();
        } catch (e) {
            // do nothing
        }
    }
}
