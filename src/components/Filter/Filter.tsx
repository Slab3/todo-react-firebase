import React from 'react';
import styles from './Filter.module.scss';

interface IFilterTodos {
  search: string
  onSearchChange(event: React.ChangeEvent<HTMLInputElement>): void
  filterBy: string
  onSelectChange(event: React.ChangeEvent<HTMLSelectElement>): void
}

export const Filter: React.FC<IFilterTodos> = ({ search, onSearchChange, filterBy, onSelectChange }) => {

  return (
    <div className={styles.filtration}>
      <div className={styles.searchBlock}>
        <input
          type="text"
          placeholder="Search item..."
          id="search"
          className={styles.search}
          value={search}
          onChange={onSearchChange}
          autoComplete={"off"}
        />
      </div>
      <div className={styles.selectSortBlock}>
        <label className={styles.labelSort} htmlFor="selectSortTodo">Sort by: </label>
        <select
          id="selectSortTodo"
          className={styles.selectSortTodo}
          name="filterBy"
          onChange={onSelectChange}
          value = {filterBy}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incompleted">Incomplete</option>
        </select>
      </div>
    </div>
  )
};

export default Filter;
