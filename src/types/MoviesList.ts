import IMovie from './Movie';

export default interface MovieList {
    page: number;
    results: Array<IMovie>;
    total_results: number;
    total_pages: number;
}
