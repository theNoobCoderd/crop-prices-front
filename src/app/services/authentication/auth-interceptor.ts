import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {inject, Injectable} from "@angular/core";
import {Auth, authState} from "@angular/fire/auth";
import {from, Observable, switchMap, take} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	firebaseAuth = inject(Auth);

	constructor() {}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return authState(this.firebaseAuth).pipe(
			take(1),
			switchMap(user => {
				if (user) {
					// Get the ID token
					return from(user.getIdToken()).pipe(
						switchMap(token => {
							// Clone the request and add the authorization header
							const authReq = req.clone({
								setHeaders: {
									Authorization: `Bearer ${token}`
								}
							});
							return next.handle(authReq);
						})
					);
				} else {
					// No user logged in, proceed without token
					return next.handle(req);
				}
			})
		);
	}
}
