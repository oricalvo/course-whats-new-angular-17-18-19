import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: "app-counter",
    standalone: true,
    imports: [],
    templateUrl: "./counter.component.html",
    styleUrl: "./counter.component.scss",
})
export class CounterComponent implements OnChanges {
    @Input({ required: true }) value!: number;

    //
    //  This is an internal state
    //
    protected message!: string;

    ngOnChanges(changes: SimpleChanges): void {
        this.message = "Hello user, counter is " + this.value;
    }
}