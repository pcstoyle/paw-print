import Dogs from '../components/Dogs';
import luna from '../images/luna.png'
function DogProfile() {
    const rowOne = [
        {
            id: 1,
            kennelNum: 1,
            name: 'Luna',
            breed: 'corgie mix',
            date: '',
            
            
        }
  ]

    return (
        <section>
        <h1 class="m-5">dogs</h1>
      <div class="grid grid-cols-2 place-content-center">
        
          <div class="">
            { rowOne.map (({id, name, breed, kennelNum, date}) => (
                <Dogs key={id} kennelNum={kennelNum} name={name} breed={breed} date={date}/>
            ) )}
          </div>
      </div></section>
    );
  }
  
  export default DogProfile;