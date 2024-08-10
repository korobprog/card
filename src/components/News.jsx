import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types, no-unused-vars
const News = ({ title, children }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Title>{title}</Card.Title>
      {children}
    </Card>
  );
};

export default News;
