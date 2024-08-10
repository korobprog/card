import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import News from '../News';
import img from '../../img/krishna2.jpg';
import ImageCard from '../ImageCard';

const CardProfile = (props) => {
  return (
    <News {...props} title="Чем сознание Кришны отличается от сознания Христа?">
      <Card style={{ width: '18rem' }}>
        <ImageCard img={img} />
        <Card.Body>
          <Card.Text>
            В первую очередь, религия подразумевает знание Бога и любовь к Нему.
            В этом суть религии. Сейчас люди не получают необходимого
            воспитания, и потому никто не знает Бога, не говоря уже о том, чтобы
            полюбить Его. Люди довольствуются тем, что ходят в церковь и
            молятся: «Боже, дай нам хлеб наш насущный». В «Шримад-Бхагаватам»
            это называется лжерелигией, поскольку ее цель - не познать и
            возлюбить Бога, а извлечь для себя какую-то выгоду. Иначе говоря,
            если я заявляю, что исповедую какую-то религию, но не знаю, кто
            такой Бог и что значит любить Его, я исповедую лжерелигию. Что
            касается христианской религии, то она предоставляет большие
            возможности для понимания Бога, но их никто не использует. Так,
            например, в Библии есть заповедь «Не убий», а христиане построили
            лучшие в мире скотобойни... Как же они могут обрести сознание Бога,
            если не подчиняются заповедям Господа Иисуса Христа? И это
            происходит не только в христианской, но и во всех других религиях.
            «Индус», «мусульманин» или «христианин» - это просто ярлыки. Никто
            из них не знает, кто такой Бог и что значит любить Его.
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

export default CardProfile;
