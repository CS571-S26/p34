import '../App.css'
import { Card } from 'react-bootstrap'

export default function AboutPage() {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Card className='m-4 p-2'>
        <Card.Body className='text-center'>
          <h2>About Badger ReSearch</h2> 
          <p><strong>Badger ReSearch </strong>started as a simple project trying to fix my personal issues with academic research.</p>
          <p>I wanted to create something that allowed students and faculty to peruse through the research being done</p>
          <p>on campus without having to toil through newsletters, Google Scholar, or other global tools.</p>
          <br />
          <p>I felt the desire to create a tool that would fix or assist with some of these issues.</p>
        </Card.Body>
      </Card>
    </div>
  )
}
