import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ClockComponent} from './clock/clock.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, ClockComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'starter';
}