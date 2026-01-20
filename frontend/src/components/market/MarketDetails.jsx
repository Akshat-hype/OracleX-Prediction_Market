const MarketDetails = ({ market }) => (
  <>
    <h2>{market.title}</h2>
    <p>{market.description}</p>
    <p>Status: {market.status}</p>
  </>
);

export default MarketDetails;
