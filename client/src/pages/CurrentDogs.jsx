import Card from '../components/Card';
import luna from '../images/luna.png';

function CurrentDogs() {
    const projects = [
        {
            id: 1,
            name: 'Luna',
            imgsrc: luna,
            description: 'This might actually need to turn to our kennel view - but again, bare bones',
            
        },
        {
            id: 2,
            name: '',
            imgsrc: '',
            description: '',
        },
        {
            id: 3,
            name: '',
            imgsrc: '',
            description: '',
        },
        {
            id: 4,
            name: '',
            imgsrc: '',
            description: '',
        },
        {
            id: 5,
            name: '',
            imgsrc: '',
            description: '',
        },
        {
            id: 6,
            name: '',
            imgsrc: '',
            description: '',
        },
    ]
    return (
      <section>
          <h2> Current Dogs </h2>
          <div>
            { projects.map (({id, title, imgsrc}) => (
                <Card key={id} title={title} imgsrc={imgsrc}/>
            ) )}
          </div>
      </section>
    );
  }
  
  export default CurrentDogs;
