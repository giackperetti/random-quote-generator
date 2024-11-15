import "./Quote.css";

type QuoteProps = {
  quote: {
    quote: string;
    movie: string;
    character: string;
  };
};

export default function Quote({ quote }: QuoteProps) {
  return (
    <div className="quote">
      <p className="quote-text">
        "<b>{quote.quote}</b>"
      </p>
      <p className="quote-character">{quote.character}</p>
      <p className="quote-movie">{quote.movie}</p>
    </div>
  );
}
