import { useEffect, useState, useMemo } from 'react'
import '../App.css'
import { Button, Card, Form } from 'react-bootstrap'
import { SearchHero } from '../components/SearchHero';
import ProfessorCard from '../components/ProfessorCard';


export default function SearchPage() {

  const [professorProfiles, setProfessorProfiles] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Fetch
    fetch("src/professors.json")
      // Turn into JSON
      .then(res => res.json())
      // Parse out as data
      .then(data => {
        setProfessorProfiles(data);
      })
      // Catches any errors
      .catch(err => console.error('Fetch failed:', err));
  }, []);

  const filteredProfessors = useMemo(() => {
      const q = query.toLowerCase().trim();
      if (!q) return professorProfiles;
  
      return professorProfiles.filter((prof) => {
        return (
          prof.name.toLowerCase().includes(q) ||
          prof.department.toLowerCase().includes(q) ||
          prof.title.toLowerCase().includes(q) ||
          prof.bio.toLowerCase().includes(q) ||
          prof.researchInterests.some((interest) =>
            interest.toLowerCase().includes(q)
          )
        );
      });
    }, [query, professorProfiles]);

  return (
    <>
      {/* Pass the query state down so SearchHero can control it */}
      <SearchHero query={query} onQueryChange={setQuery} />

      <div className="search-results">
        {filteredProfessors.length > 0 ? (
          filteredProfessors.map((prof) => (
            <ProfessorCard key={prof.id} professor={prof} />
          ))
        ) : (
          <p className="search-results__empty">
            No professors found for &ldquo;{query}&rdquo;.
          </p>
        )}
      </div>
    </>
  );
}
