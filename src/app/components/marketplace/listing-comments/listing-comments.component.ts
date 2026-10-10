import {Component, inject, OnDestroy, OnInit} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {DatePipe, AsyncPipe} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {BehaviorSubject, Subject, takeUntil} from "rxjs";
import {CommentDTO} from "../../../models/comment.model";
import {CommentService} from "../../../services/comment/comment.service";
import {UserService} from "../../../services/user/user.service";
import {NavigationPage} from "../../../models/navigation-page.enum";

@Component({
	selector: "app-listing-comments",
	imports: [
		MatDialogContent,
		MatDialogActions,
		MatDialogClose,
		DatePipe,
		AsyncPipe,
		ReactiveFormsModule,
	],
	templateUrl: "./listing-comments.component.html",
	styleUrl: "./listing-comments.component.less"
})
export class ListingCommentsComponent implements OnInit, OnDestroy {

	data = inject(MAT_DIALOG_DATA);
	userService = inject(UserService);

	comments$ = new BehaviorSubject<CommentDTO[]>([]);
	commentsLoaded$ = new BehaviorSubject<boolean>(false);

	commentForm: FormGroup;

	private _destroy$ = new Subject<void>();

	constructor(private _formBuilder: FormBuilder,
							private _commentService: CommentService) {
		this.commentForm = this._formBuilder.group({
			content: ["", Validators.required]
		});
	}

	ngOnInit(): void {
		this._loadComments();
	}

	ngOnDestroy(): void {
		this._destroy$.next();
		this._destroy$.complete();
	}

	postComment(): void {
		if (this.commentForm.invalid) {
			this.commentForm.markAllAsTouched();
			return;
		}

		const content = this.commentForm.value.content;
		this._commentService.createComment(this.data?.listingId, {content})
			.pipe(takeUntil(this._destroy$))
			.subscribe((comment: CommentDTO) => {
				this.comments$.next([...this.comments$.getValue(), comment]);
				this.commentForm.reset();
			});
	}

	private _loadComments(): void {
		this.commentsLoaded$.next(false);
		this._commentService.getComments(this.data?.listingId)
			.pipe(takeUntil(this._destroy$))
			.subscribe((comments: CommentDTO[]) => {
				this.comments$.next(comments);
				this.commentsLoaded$.next(true);
			});
	}
}
