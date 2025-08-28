import {inject, Injectable} from "@angular/core";
import {
	Auth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword, signInWithPhoneNumber, signOut,
	updateProfile,
	user,
	RecaptchaVerifier,
	ConfirmationResult,
	UserCredential, signInWithPopup, GoogleAuthProvider
} from "@angular/fire/auth";
import {from, Observable} from "rxjs";
import {UserService} from "../user/user.service";

@Injectable({
	providedIn: "root"
})
export class AuthService {
	firebaseAuth = inject(Auth);
	firebaseUser$ = user(this.firebaseAuth);

	_userService = inject(UserService);

	constructor() { }

	loginWithGoogle(): Observable<UserCredential> {
		const promise = signInWithPopup(this.firebaseAuth, new GoogleAuthProvider());
		return from(promise);
	}

	logout(): Observable<void> {
		const promise = signOut(this.firebaseAuth);
		this._userService.logout();
		return from(promise);
	}
}
