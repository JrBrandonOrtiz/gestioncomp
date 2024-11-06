export interface IVacancies {
    totalPages:       number;
    totalElements:    number;
    pageable:         Pageable;
    numberOfElements: number;
    size:             number;
    content:          Content[];
    number:           number;
    sort:             Sort[];
    first:            boolean;
    last:             boolean;
    empty:            boolean;
    
}

export interface Content {
    id:          string;
    title:       string;
    description: string;
    status:      string;
    company:     Company[];
}

export interface ICreateVacancyBody {
    title: string;
    description: string;
    status: string;
    companyId: string;
}

export interface Company {
    id:       string;
    name:     string;
    location: string;
    contact:  string;
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