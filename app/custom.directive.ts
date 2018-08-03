import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector : "[custom-directive]"
})

export class customDirective{

    constructor(el:ElementRef){
        el.nativeElement.style.backgroundColor = "red";
        el.nativeElement.style.color = "white";
    }
}