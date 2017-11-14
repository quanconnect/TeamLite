/* Node Modules */
import axios from 'axios';
import * as qs from 'qs';

/* Return Type Keyword Constants */
export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

export function addBookmarkedArticle(article) {

	return {
		type: ADD_BOOKMARK,
		payload: article
	}
}

export function removeBookmarkedArticle(article) {
	return {
		type: REMOVE_BOOKMARK,
		payload: article
	}
}
