/* tslint:disable */
import { Project } from './project';
import { SearchResult } from './search-result';
import { SearchRepository } from './search-repository';
export interface Search {

  /**
   * Search results of the projects that matched the filter keywords.
   */
  project?: Array<Project>;

  /**
   * Search results of the charts that macthed the filter keywords.
   */
  chart?: Array<SearchResult>;

  /**
   * Search results of the repositories that matched the filter keywords.
   */
  repository?: Array<SearchRepository>;
}
