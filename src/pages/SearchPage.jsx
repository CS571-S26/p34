import { useEffect, useState } from 'react'
import '../App.css'
import { Button, Card, Form } from 'react-bootstrap'
import { SearchHero } from '../components/SearchHero';


export default function SearchPage() {
  // const [count, setCount] = useState(0)
    
  const [professorProfiles, setProfessorProfiles] = useState("");

//   useEffect(() => {
//     fetch(`../professors.json`)
//         .then(res => res.json())
//         .then(data => setProfessorProfiles(data));
//   }, []);

  return (
    <SearchHero />
  )
}
