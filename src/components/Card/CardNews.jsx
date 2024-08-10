import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import News from '../News';
import img from '../../img/krishna.jpg';
import ImageCard from '../ImageCard';

const CardNews = (props) => {
  return (
    <News {...props} title="Кто такой Кришна?">
      <Card style={{ width: '18rem' }}>
        <ImageCard img={img} />
        <Card.Body>
          <Card.Text>
            Кришна - значит «Бог». Все мы тесно связаны с Ним, так как Он - наш
            изначальный отец. Но мы забыли об этих взаимоотношениях. Когда мы
            задумываемся над вопросами: «Каковы мои взаимоотношения с Богом?
            Какова цель жизни?», - нас называют сознающими Кришну.
          </Card.Text>
          <Button
            variant="primary"
            href="https://krishnaism.ru/philosophy/basics/spiritual-science/234-what-is-krishna-consciousness.html"
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </News>
  );
};

export default CardNews;
