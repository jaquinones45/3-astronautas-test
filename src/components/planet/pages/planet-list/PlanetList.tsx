import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { usePlanetStore } from '@/store/usePlanetStore';

import styles from './PlanetList.module.css';

import PlanetCard from '@/components/planet/components/planet-card/PlanetCard';
import Pagination from '@/components/pagination/Pagination';
import SearchBar from '@/components/search-bar/SearchBar';
import SortSelect from '@/components/sort-select/SortSelect';

import { PlanetProps } from '@/types/planetProps';

const PlanetList = ({ bodies }: { bodies: PlanetProps[] }) => {
  const router = useRouter();

  const { searchTerm, setSearchTerm, sortOrder, setSortOrder, currentPage, setCurrentPage } = usePlanetStore();

  const itemsPerPage = 5;

  const filteredPlanets = bodies
    .filter((planet) => planet.englishName.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortOrder === 'asc' ? a.englishName.localeCompare(b.englishName) : b.englishName.localeCompare(a.englishName)));

  const totalPages = Math.ceil(filteredPlanets.length / itemsPerPage);
  const paginatedPlanets = filteredPlanets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    if (sortOrder) params.set("sort", sortOrder);

    router.push(`${router.pathname}?${params.toString()}`);
  }, [router, searchTerm, sortOrder]);

  return (
    <div className={styles.container}>
      <div className={styles.filtersContainer}>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <SortSelect sortOrder={sortOrder} onSortChange={setSortOrder} />
      </div>

      <div className={styles.cardContainer}>
        {paginatedPlanets.map((planet) => (
          <PlanetCard
            key={planet.id}
            id={planet.id}
            name={planet.englishName}
            imageUrl={`/image/${planet.id}.jpg`}
            mass={planet?.mass?.massValue?.toString()}
            favorite={planet?.favorite}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PlanetList;
