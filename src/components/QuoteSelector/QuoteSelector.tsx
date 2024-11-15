import { useState } from "react";
import Quote from "../Quote/Quote";
import "./QuoteSelector.css"

const quotes = [
  { quote: "Do, or do not. There is no try.", movie: "Star Wars: The Empire Strikes Back (1980)", character: "Yoda" },
  { quote: "It's not who I am underneath, but what I do that defines me.", movie: "Batman Begins (2005)", character: "Batman" },
  { quote: "You can't live your life for other people. You've got to do what's right for you, even if it hurts some people you love.", movie: "The Notebook (2004)", character: "Noah" },
  { quote: "Oh yes, the past can hurt. But the way I see it, you can either run from it, or learn from it.", movie: "The Lion King (1994)", character: "Rafiki" },
  { quote: "Our lives are defined by opportunities, even the ones we miss.", movie: "The Curious Case of Benjamin Button (2008)", character: "Benjamin Button" },
  { quote: "Why do we fall, sir? So that we can learn to pick ourselves up.", movie: "Batman Begins (2005)", character: "Alfred Pennyworth" },
  { quote: "Great men are not born great, they grow great.", movie: "The Godfather (1972)", character: "Don Vito Corleone" },
  { quote: "The flower that blooms in adversity is the most rare and beautiful of all.", movie: "Mulan (1998)", character: "The Emperor" },
  { quote: "It's not the years, honey, it's the mileage.", movie: "Indiana Jones: Raiders of the Lost Ark (1981)", character: "Indiana Jones" },
  { quote: "Don't let anyone ever make you feel like you don't deserve what you want.", movie: "10 Things I Hate About You (1999)", character: "Patrick Verona" },
  { quote: "The only way to achieve the impossible is to believe it is possible.", movie: "Alice in Wonderland (2010)", character: "The Mad Hatter" },
  { quote: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.", movie: "Harry Potter and the Prisoner of Azkaban (2004)", character: "Albus Dumbledore" },
  { quote: "After a while, you learn to ignore the names people call you and just trust who you are.", movie: "Shrek (2001)", character: "Shrek" },
  { quote: "You're braver than you believe, and stronger than you seem, and smarter than you think.", movie: "Winnie the Pooh (2011)", character: "Christopher Robin" },
  { quote: "Every man dies, not every man really lives.", movie: "Braveheart (1995)", character: "William Wallace" },
];

export default function QuoteSelector() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  function handleClick() {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === currentQuote);
    setCurrentQuote(newQuote);
  }

  return (
    <div className="quote-container">
      <h1>Randomly Generated Quote</h1>
      <Quote quote={currentQuote} />
      <button onClick={handleClick}>Show Another Quote</button>
    </div>
  );
}
