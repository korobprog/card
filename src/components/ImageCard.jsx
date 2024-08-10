import Card from 'react-bootstrap/Card';

// eslint-disable-next-line react/prop-types, no-unused-vars
const ImageCard = ({ img, children }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      {children}
    </Card>
  );
};

export default ImageCard;
