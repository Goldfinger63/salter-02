// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

// Step 2: Define your component
const ContactPage = () => {
    return (
        <main>
            <title>Jeff C. Salter</title>
            <h1>About Me</h1>
            <p>Jeff Salter hails from Memphis, Tennessee and serves as an Instructor and Information resource consultant for the iSchool at the University of South Carolina. He teaches courses in information technology, information strategies, cybersecurity and web design.  Jeff holds a BA degree in Journalism and an MMA in Media Arts.  His career spans more than 35 years at USC.</p>
            <Link to="/">Back to Home</Link>
        </main>
    )
}
// Step 3:  Export your component
export default ContactPage