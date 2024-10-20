import { FC } from 'react';

import styles from "./SortSelect.module.css";

interface SortSelectProps {
  sortOrder: string | 'asc' | 'desc';
  onSortChange: (value: 'asc' | 'desc') => void;
}

const SortSelect: FC<SortSelectProps> = ({ sortOrder, onSortChange }) => {
  return (
    <select
      value={sortOrder}
      onChange={(e) => onSortChange(e.target.value as 'asc' | 'desc')}
      className={styles.select}
    >
      <option value="asc">Ascendente</option>
      <option value="desc">Descendente</option>
    </select>
  );
};

export default SortSelect;
