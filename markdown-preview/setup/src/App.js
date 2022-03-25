import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markDown, setMarkDown] = useState(`# Markdown Result 
[markdown syntax](https://www.markdownguide.org/cheat-sheet/#basic-syntax)`
  )
  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markDown}
          onChange={(event) => { setMarkDown(event.target.value) }}
        >
        {markDown}
        </textarea>
        <article className='result'> 
          <ReactMarkdown>
            {markDown}
          </ReactMarkdown>
        </article> 
      </section>
    </main>
  )
}

export default App
