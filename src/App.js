import './App.css';
import Films from './Components/Films/Films'

const films = [{
  name: 'Супермен',
  count: 5,
  cost: 1299,
},
{
  name: 'Одинокий страннник',
  count: 4,
  cost: 899,
},
]  

function App() {
  return (
    <Films films={films} />
  );
}

export default App;
