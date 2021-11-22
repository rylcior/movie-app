import IMovie from './Movie';

export default interface IMovieList {
    page: number;
    results: Array<IMovie>;
    total_results: number;
    total_pages: number;
}
