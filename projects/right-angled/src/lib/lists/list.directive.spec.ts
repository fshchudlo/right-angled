import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FiltersService, OperationStatus, SortDirection, SortingsService, SortParameter } from 'e2e4';
import { Observable } from 'rxjs';
import { RTStateService, RTList } from './providers/list';
import { ListDirective } from './lists.module';

@Component({
    template: `
        <div
            [rtList]="getData"
            [defaultSortings]="defaultSortings"
            [keepRecordsOnLoad]="keepRecordsOnLoad"
            (listInit)="listInit($event)"
            (afterListInit)="afterListInit($event)"
            (loadSucceed)="loadSucceed($event)"
            (loadFailed)="loadFailed()"
            (loadStarted)="loadStarted()"
        ></div>
    `
})
class HostComponent {
    public failOnLoad = false;
    public keepRecordsOnLoad = false;
    public defaultSortings: SortParameter[] = [];
    public getData = (): any => {
        return new Observable((observer: any) => {
            setTimeout(() => {
                if (this.failOnLoad) {
                    observer.error();
                } else {
                    observer.next([]);
                }
                observer.complete();
            }, 100);
        });
    };
    public afterListInit(): void {
        return;
    }
    public listInit(): void {
        return;
    }
    public loadStarted(): void {
        return;
    }
    public loadSucceed(): void {
        return;
    }
    public loadFailed(): void {
        return;
    }
}
@Component({
    template: `
        <div [rtList]="getData" [loadOnInit]="false"></div>
    `
})
class NotLoadOnInitHostComponent {
    public getData(): void {
        return;
    }
}

class ListStub {}

class RTStateServiceStub extends RTStateService {
    public getState(): void {
        return;
    }
    public persistState(): void {
        return;
    }
}

class FiltersServiceStub {}
class SortingsServiceStub {}

describe('rtList directive', () => {
    let fixture: ComponentFixture<HostComponent>;
    let listService: RTList;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HostComponent, NotLoadOnInitHostComponent, ListDirective],
            providers: [
                { provide: RTStateService, useClass: RTStateServiceStub },
                { provide: RTList, useClass: ListStub },
                { provide: FiltersService, useClass: FiltersServiceStub },
                { provide: SortingsService, useClass: SortingsServiceStub }
            ]
        });
        fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
        listService = fixture.debugElement.children[0].injector.get(RTList);
    });

    it('Acts as DI root for list-related services', () => {
        const filtersService = fixture.debugElement.children[0].injector.get(FiltersService);
        const sortingsService = fixture.debugElement.children[0].injector.get(SortingsService);
        expect(listService instanceof ListStub).toBeFalsy();
        expect(filtersService instanceof FiltersServiceStub).toBeFalsy();
        expect(sortingsService instanceof SortingsServiceStub).toBeFalsy();
    });

    it('Sets listService.fetchMethod to passed parameter', () => {
        expect(listService.fetchMethod).toEqual(fixture.debugElement.componentInstance.getData);
    });

    it('Proxies utility methods to list service methods', () => {
        const listDirective = fixture.debugElement.children[0].injector.get(ListDirective);

        spyOn(listService, 'reloadData');
        expect(listService.reloadData).not.toHaveBeenCalled();
        listDirective.reloadData();
        expect(listService.reloadData).toHaveBeenCalled();

        spyOn(listService, 'loadData');
        expect(listService.loadData).not.toHaveBeenCalled();
        listDirective.loadData();
        expect(listService.loadData).toHaveBeenCalled();

        spyOn(listService, 'resetSettings');
        expect(listService.resetSettings).not.toHaveBeenCalled();
        listDirective.resetSettings();
        expect(listService.resetSettings).toHaveBeenCalled();

        spyOn(listService, 'cancelRequests');
        expect(listService.cancelRequests).not.toHaveBeenCalled();
        listDirective.cancelRequests();
        expect(listService.cancelRequests).toHaveBeenCalled();

        expect(listDirective.busy).toEqual(false);
        (listService as any).statusInternal = OperationStatus.Progress;
        expect(listDirective.busy).toEqual(true);
        (listService as any).statusInternal = OperationStatus.Done;
        expect(listDirective.busy).toEqual(false);

        expect(listDirective.ready).toEqual(true);
        (listService as any).statusInternal = OperationStatus.Progress;
        expect(listDirective.ready).toEqual(false);
        (listService as any).statusInternal = OperationStatus.Done;
        expect(listDirective.ready).toEqual(true);

        expect(listDirective.items).toEqual(listService.items);
    });

    it('Sets sortingsService.defaultSortings to passed input', () => {
        const sortingsService = fixture.debugElement.children[0].injector.get(SortingsService);
        expect(sortingsService.defaultSortings).toEqual(fixture.debugElement.componentInstance.defaultSortings);
        fixture.debugElement.componentInstance.defaultSortings = [{ direction: SortDirection.Asc, fieldName: 'field' }];
        fixture.detectChanges();
        expect(sortingsService.defaultSortings).toEqual(fixture.debugElement.componentInstance.defaultSortings);
    });

    it('Sets keepRecordsOnLoad to passed input', () => {
        expect(listService.keepRecordsOnLoad).toEqual(fixture.debugElement.componentInstance.keepRecordsOnLoad);
        fixture.debugElement.componentInstance.keepRecordsOnLoad = !fixture.debugElement.componentInstance.keepRecordsOnLoad;
        fixture.detectChanges();
        expect(listService.keepRecordsOnLoad).toEqual(fixture.debugElement.componentInstance.keepRecordsOnLoad);
    });

    it('Destroys listService on directive destroy', () => {
        expect(listService.destroyed).toEqual(false);
        fixture.destroy();
        expect(listService.destroyed).toEqual(true);
    });
    it('Inits listService after directive init', async () => {
        expect(listService.inited).toEqual(false);
        await fixture.whenStable();
        expect(listService.inited).toEqual(true);
    });
    it('Calls listService loadData after directive init', async () => {
        spyOn(listService, 'loadData');
        expect(listService.loadData).not.toHaveBeenCalled();
        await fixture.whenStable();
        expect(listService.loadData).toHaveBeenCalled();
    });
    it('Calls listInit and afterListInit with listService instance after directive init', async () => {
        spyOn(fixture.componentInstance, 'listInit');
        spyOn(fixture.componentInstance, 'afterListInit');

        expect(fixture.componentInstance.listInit).not.toHaveBeenCalled();
        expect(fixture.componentInstance.afterListInit).not.toHaveBeenCalled();
        await fixture.whenStable();
        expect(fixture.componentInstance.listInit).toHaveBeenCalledWith(listService);
        expect(fixture.componentInstance.afterListInit).toHaveBeenCalledWith(listService);
    });

    it('Calls loadStarted on data load', async () => {
        await fixture.whenStable();
        const listDirective = fixture.debugElement.children[0].injector.get(ListDirective);
        spyOn(fixture.componentInstance, 'loadStarted');
        listDirective.loadData();
        fixture.detectChanges();
        expect(fixture.componentInstance.loadStarted).toHaveBeenCalled();
    });
    it('Calls loadStarted on data reload', async () => {
        await fixture.whenStable();
        const listDirective = fixture.debugElement.children[0].injector.get(ListDirective);
        spyOn(fixture.componentInstance, 'loadStarted');
        listDirective.reloadData();
        fixture.detectChanges();
        expect(fixture.componentInstance.loadStarted).toHaveBeenCalled();
    });
    it('Calls loadSucceed after successful data load', async () => {
        spyOn(fixture.componentInstance, 'loadSucceed');
        expect(fixture.componentInstance.loadSucceed).not.toHaveBeenCalled();
        await fixture.whenStable();
        expect(fixture.componentInstance.loadSucceed).toHaveBeenCalled();
    });
    it('Calls onLoadFail after data loading failed', async () => {
        spyOn(fixture.componentInstance, 'loadFailed');
        expect(fixture.componentInstance.loadFailed).not.toHaveBeenCalled();
        fixture.componentInstance.failOnLoad = true;
        await fixture.whenStable();
        expect(fixture.componentInstance.loadFailed).toHaveBeenCalled();
    });
    it('Does not call listService loadData if "loadOnInit" is false', async () => {
        const notLoadFixture = TestBed.createComponent(NotLoadOnInitHostComponent);
        notLoadFixture.detectChanges();
        const notLoadListService = notLoadFixture.debugElement.children[0].injector.get(RTList);
        spyOn(notLoadListService, 'loadData');
        expect(notLoadListService.loadData).not.toHaveBeenCalled();
        await notLoadFixture.whenStable();
        expect(notLoadListService.loadData).not.toHaveBeenCalled();
    });
});
