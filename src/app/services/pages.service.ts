import { Injectable } from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {NavigationPage} from "../models/navigation-page.enum";

@Injectable({
  providedIn: "root"
})
export class PagesService {

	selectedPage$ = new BehaviorSubject<number>(NavigationPage.LISTING);

  constructor() { }

	changePageTo(page: NavigationPage): void {
		this.selectedPage$.next(page);
	}
}
