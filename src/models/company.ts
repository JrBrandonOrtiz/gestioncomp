export interface ICompany {
    id:       string;
    name:     string;
    location: string;
    contact:  string;
    vacants:  Vacant[];
}

export interface ICreateCompany{
    name:     string;
    location: string;
    contact:  string;
} 


export interface IGetCompanyResponse {
    totalPages:       number;
    totalElements:    number;
    pageable:         Pageable;
    numberOfElements: number;
    size:             number;
    content:          ICompany[];
    number:           number;
    sort:             Sort[];
    first:            boolean;
    last:             boolean;
    empty:            boolean;
}



export interface Vacant {
    id:          string;
    title:       string;
    description: string;
    status:      string;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
    offset:     number;
    sort:       Sort[];
}

export interface Sort {
    direction:    string;
    nullHandling: string;
    ascending:    boolean;
    property:     string;
    ignoreCase:   boolean;
}