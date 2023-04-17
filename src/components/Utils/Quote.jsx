import React, { useEffect, useState } from 'react'
import './Quote.scss'

const Quote = () => {
  const [quote, setQuote] = useState('')

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const res = await fetch('https://type.fit/api/quotes')
        const quotes = await res.json()
        const quote = quotes[Math.trunc(Math.random() * quotes.length)]
        setQuote(quote)
        console.log(quote)
      } catch (err) {
        console.error(err)
      }
    }
    fetchQuotes()
  }, [])

  return (
    <figure className="quote">
      <blockquote className="quote__text">{quote.text}</blockquote>
      {quote.author ? (
        <figcaption className="quote__author">— {quote.author}</figcaption>
      ) : (
        ''
      )}
    </figure>
  )
}

export default Quote
