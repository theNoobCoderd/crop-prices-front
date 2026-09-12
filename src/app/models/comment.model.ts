export interface CommentDTO {
	id: string;
	authorId: string;
	authorName: string;
	content: string;
	createdAt: string;
}

export interface CreateCommentRequest {
	content: string;
}
