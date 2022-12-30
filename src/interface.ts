export interface IDataItems {
    country: string,
    genres: string[],
    imdb_rate: number,
    keyframe: string,
    length: number,
    min_age: number,
    num_seasons?:number,
    poster: string,
    title: string,
    year: number,
    is_new?: boolean,
    type?: string

}

export interface IMain  {
    searchData: Array<IDataItems>,
    searchStatus: boolean,
    searching: (a:  Array<IDataItems>) => void,
    term: string,
    setTerm: (a: string) => void,
    changeSearchStatus: (a: boolean) => void

}

export interface ISearch {
    searchStatus: boolean,
    changeSearchStatus: (a:boolean) => void,
    setTerm: (a: string) => void
}