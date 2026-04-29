import './search-hero.css';

export function SearchHero({ query, onQueryChange }) {
  return (
    <div className="search-hero">
      <div className="search-hero__inner">
        <div className="search-hero__heading-block">
          <h2 className="search-hero__title">
            Discover Academic Research
          </h2>
          <p className="search-hero__subtitle">
            Search through thousands of research papers, publications, and academic resources
          </p>
        </div>

        <div className="search-hero__bar-wrapper">
          <form
            className="search-hero__bar"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="professor-search" className="sr-only">
              Search professors
            </label>
            <input
              id="professor-search"
              type="text"
              placeholder="Search by title, author, keyword, or topic..."
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              className="search-hero__input"
            />
            <button type="submit" className="search-hero__button">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}