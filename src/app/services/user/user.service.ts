import {inject, Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {User} from "../../models/user.model";
import {Router} from "@angular/router";

@Injectable({
	providedIn: "root"
})
export class UserService {
	router = inject(Router);
	http = inject(HttpClient);

	// Observable to store login status
	userLoggedIn$ = new BehaviorSubject<boolean>(false);

	// Observable to store logged user details
	currentUser$ = new BehaviorSubject<User | null>(null);

	private readonly apiUrl = environment.apiUrl + "/api/v1/user";

	getUserById(id: string): Observable<User> {
		const url = `${this.apiUrl}/${id}`;
		return this.http.get<User>(url).pipe(tap((user: User) => {
			if (user) {
				this._setUserState(user);
				this._setLoginState(true);
			}
		}));
	}

	createUser(user: User): Observable<boolean> {
		const url = `${this.apiUrl}/create`;
		return this.http.post<boolean>(url, user).pipe(tap((isCreated) => {
			if (isCreated) {
				this._setUserState(user);
				this._setLoginState(true);
			}
		}));
	}

	checkUserExists(authId: string): Observable<boolean> {
		const url = `${this.apiUrl}/check/${authId}`;
		return this.http.get<boolean>(url);
	}

	// Logout method that clears the user state
	logout(): void {
		this._clearUserState();
		this._setLoginState(false);
	}

	private _setUserState(user: User | null): void {
		this.currentUser$.next(user);
		if (user) {
			localStorage.setItem("currentUser", JSON.stringify(user));
		} else {
			localStorage.removeItem("currentUser");
		}
	}

	private _setLoginState(isLoggedIn: boolean): void {
		this.userLoggedIn$.next(isLoggedIn);
		localStorage.setItem('isUserLoggedIn', JSON.stringify(isLoggedIn));
	}

	private _clearUserState(): void {
		this._setUserState(null);
	}
}
