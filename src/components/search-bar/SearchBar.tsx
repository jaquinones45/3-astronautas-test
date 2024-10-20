import { FC } from 'react';

import styles from "./SearchBar.module.css";

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ search, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar planeta"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      className={styles.input}
    />
  );
};

export default SearchBar;