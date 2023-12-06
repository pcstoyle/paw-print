import Card from '../components/Card';
import luna from '../images/luna.png';

function CurrentDogs() {
    const projects = [
        {
            id: 1,
            name: 'Luna',
            breed: '',
            imgsrc: luna,
            description: 'This might actually need to turn to our kennel view - but again, bare bones',
            
        },
        {
            id: 2,
            name: 'Tallmadge',
            breed: 'GSD/Boxer',
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
        
          <div>
            { projects.map (({id, title, name,  imgsrc}) => (
                <Card key={id} title={title} name={name} imgsrc={imgsrc}/>
            ) )}
          </div>
      </section>
    );
  }
  
  export default CurrentDogs;