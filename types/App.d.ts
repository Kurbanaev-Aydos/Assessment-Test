export type Post = {
  id: string
  title: string
  status: string
  date: string
}
export interface PaginationType {
  postsPerPage: number
  posts: Post[]
  paginate: Function
  previousPage: any
  nextPage: any
  currentPosts: Post[]
  changeNumberPerPage: Function
  lastIndex: number
  firstIndex: number
}
export interface TableProp {
  filteredData: string
  searchValue: string
  posts: Post[]
  currentPosts: Post[]
  indexOfFirst: number
}
export interface ButtonProp {
  setFilteredDate: Function
  posts: Post[]
}
export interface LayoutProp {
  children: JSX.Element
}
export type PostState = {
  list: Post[]
}
export interface SinglePostType {
  id: string
  date: string
  title: string
  status: string
  handleChange: Function
  i: number
}
