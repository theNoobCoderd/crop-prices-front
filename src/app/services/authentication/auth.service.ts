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
	confirmationResult: ConfirmationResult | null = null;

	_userService = inject(UserService);

	constructor() { }

	register(email: string, username: string, password: string): Observable<UserCredential> {
		const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password)
			.then((response) => {
				updateProfile(response.user, {displayName: username});
				return response;
			}
			);

		return from(promise);
	}

	loginWithGoogle(): Observable<UserCredential> {
		const promise = signInWithPopup(this.firebaseAuth, new GoogleAuthProvider());
		return from(promise);
	}

	login(email: string, password: string): Observable<UserCredential> {
		const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password);
		return from(promise);
	}

	logout(): Observable<void> {
		const promise = signOut(this.firebaseAuth);
		this._userService.logout();
		return from(promise);
	}

	sendOTP(phoneNumber: string, recaptchaVerifier: RecaptchaVerifier): Observable<void> {
		const promise = signInWithPhoneNumber(this.firebaseAuth, phoneNumber, recaptchaVerifier)
			.then((confirmationResult) => {
				console.log(confirmationResult);
				this.confirmationResult = confirmationResult;
			});
		return from(promise);
	}

	verifyOTP(confirmationResult: ConfirmationResult, otp: string): Observable<UserCredential> {
		const promise = confirmationResult.confirm(otp);
		return from(promise);
	}

	getRecaptchaVerifier(containerId: string): RecaptchaVerifier {
		return new RecaptchaVerifier(this.firebaseAuth, containerId, {
			'size': 'invisible', // or 'normal' depending on your needs
			// @ts-expect-error: Suppress implicit 'any' type error
			'callback': (response) => {
				// reCAPTCHA solved, allow signInWithPhoneNumber.
				console.log(response);
			}
		});
	}
}
