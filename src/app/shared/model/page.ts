export interface Page<T> {
  content: T[],
  last: boolean,
  totalPages: number,
  totalElements: number,
  first: number,
  numberOfElements: number,
  sort: string,
  size: number,
  number: number
}

