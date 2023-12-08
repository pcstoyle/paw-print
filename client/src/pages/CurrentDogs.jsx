import Card from '../components/Card';
import luna from '../images/luna.png';

function CurrentDogs() {
    const rowOne = [
        {
            id: 1,
            kennelNum: 1,
            name: 'Luna',
            breed: 'corgie mix',
            date: '',
            
            
        },
        {
            id: 2,
            kennelNum: 2,
            name: 'Tallmadge',
            breed: 'GSD/Boxer',
            date: '12/14',
            
        },
        {
            id: 3,
            kennelNum: 3,
            name: '',
            breed: '',
            date: '',
            
        },
        {
            id: 4,
            kennelNum: 4,
            name: '',
            breed: '',
            date: '',
            
        },
        {
            id: 5,
            kennelNum: 5,
            name: '',
            breed: '',
            date: '',
            
        },
        {
            id: 6,
            kennelNum: 6,
            name: '',
            breed: '',
            date: '',
            
        },]
        const rowTwo = [
            {
                id: 7,
                kennelNum: 7,
                name: 'Luna',
                breed: 'corgie mix',
                date: '',
                
                
            },
            {
                id: 8,
                kennelNum: 8,
                name: 'Tallmadge',
                breed: 'GSD/Boxer',
                date: '12/14',
                
            },
            {
                id: 9,
                kennelNum: 9,
                name: '',
                breed: '',
                date: '',
                
            },
            {
                id: 10,
                kennelNum: 10,
                name: '',
                breed: '',
                date: '',
                
            },
            {
                id: 11,
                kennelNum: 11,
                name: '',
                breed: '',
                date: '',
                
            },
            {
                id: 12,
                kennelNum: 12,
                name: '',
                breed: '',
                date: '',
                
            },
    ]
    return (
        <section>
        <h1 className="m-5">Kennel View</h1>
      <div className="grid grid-cols-2 place-content-center">
        
          <div className="">
            { rowOne.map (({id, name, breed, kennelNum, date}) => (
                <Card key={id} kennelNum={kennelNum} name={name} breed={breed} date={date}/>
            ) )}
          </div>
          <div className="">
            { rowTwo.map (({id, name, breed, kennelNum, date}) => (
                <Card key={id} kennelNum={kennelNum} name={name} breed={breed} date={date}/>
            ) )}
          </div>
      </div></section>
    );
  }
  
  export default CurrentDogs;