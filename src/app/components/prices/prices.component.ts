import { Component, OnInit } from '@angular/core';

@Component({
    selector:'prices-component',
    templateUrl:'./prices.component.html'
})

export class PricesComponent implements OnInit{
    constructor(){

    }
    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    }
}