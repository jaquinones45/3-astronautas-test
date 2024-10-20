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

  const { search, setSearch, sortOrder, setSortOrder, currentPage, setCurrentPage } = usePlanetStore();

  const itemsPerPage = 5;

  const filteredPlanets = bodies
    .filter((planet) => planet.englishName.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sortOrder === 'asc' ? a.englishName.localeCompare(b.englishName) : b.englishName.localeCompare(a.englishName)));

  const totalPages = Math.ceil(filteredPlanets.length / itemsPerPage);
  const paginatedPlanets = filteredPlanets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const clearFilters = () => {
    setSearch('');
    setSortOrder('');
    setCurrentPage(1);

    router.push({
      pathname: router.pathname,
      query: {},
    }, undefined, { shallow: true });
  };

  const handleSetSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handlesetSortOrder = (value: string) => {
    setSortOrder(value);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (router.query?.search) {
      setSearch(String(router.query.search));
    }
    if (router.query?.sort) {
      setSortOrder(String(router.query.sort));
    }
  }, [router, setSearch, setSortOrder]);

  useEffect(() => {
    if (search) {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          search,
        },
      }, undefined, { shallow: true });
    }
  }, [router, search]);

  useEffect(() => {
    if (sortOrder) {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          sort: sortOrder,
        },
      }, undefined, { shallow: true });
    }
  }, [router, sortOrder]);

  return (
    <div className={styles.container}>
      <div className={styles.filtersContainer}>
        <SearchBar search={search} onSearchChange={handleSetSearch} />
        <SortSelect sortOrder={sortOrder} onSortChange={handlesetSortOrder} />
        <div className={styles.clearButtonContainer}>
          <button
            onClick={clearFilters}
            className={styles.clearButton}
          >
            Clear Filters
          </button>
        </div>
      </div>

      {
        filteredPlanets.length ? (
          <>
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
          </>
        ) : (
          <div className={styles.noResultsMessage}>
            No results found. Please try again with different filters.
          </div>
        )
      }
    </div>
  );
};

export default PlanetList;
