import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'td-navbar',
    templateUrl: 'app/shared/navbar/navbar.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Input() brand: string;
}
