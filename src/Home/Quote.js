import './Quote.css'

const Quote = props => {
  return (
    <div className="quote-container">
      {/* <div className="quote-title">Quote of the Day:</div> */}
      <div className="quote-body">{props.quote}</div>
      <div className="quote-author">- {props.author}</div>
    </div>
  )
};

export default Quote;