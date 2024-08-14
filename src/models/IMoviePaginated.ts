import {PaginatedPageModel} from "@/models/PaginatedPageModel";

export interface IMoviePaginated {
    total_items: number;
    total_pages: number;
    prev: null | PaginatedPageModel;
    next: null | PaginatedPageModel;
    items: [];
}