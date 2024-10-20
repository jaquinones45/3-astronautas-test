import { FC } from 'react';

import styles from "./SearchBar.module.css";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Buscar planeta"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className={styles.input}
    />
  );
};

export default SearchBar;