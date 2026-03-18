import { useState } from 'react'
import '../App.css'
import { Button, Card, Form } from 'react-bootstrap'

export default function HomePage() {
  // const [count, setCount] = useState(0)
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Card className='m-4 p-2'>
        <Card.Header>
          <h1>Badger Research</h1>
        </Card.Header>
        <Card.Body className='text-center'>
          {/* <Button onClick={() => setCount(o => o + 1)}>Count: {count}</Button> */}
          <Form>
                <Form.Label htmlFor="searchBar">Name</Form.Label>
                <Form.Control id="searchBar"
                            placeholder="Search for a research interest..."
                            value={searchQuery}
                            onChange={(e) => {setSearchQuery(e.target.value), setCurrentPage(1)}}/>
                <br />
                <Button variant="danger" onClick={null}>Reset Search</Button>
                <br />
                {/* <p>There are <strong id="num-results">{filterStudents?.length}</strong> student(s) matching your search.</p> */}
                <p>There are <strong id="num-results">{null}</strong> result(s) matching your search.</p>
            </Form>
        </Card.Body>
      </Card>
    </div>
  )
}
