import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";


@Injectable()
export class DataService {

    private messageSource = new BehaviorSubject<string>("size1");
    private levelSource = new BehaviorSubject<string>("A");
    currentMessage = this.messageSource.asObservable();
    currentLevel = this.levelSource.asObservable();

    constructor() { }

    changeMessage(message: string) {
        this.messageSource.next(message);
    }

    changeLevel(level: string) {
        this.levelSource.next(level);
    }
}