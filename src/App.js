import SubmitForm from "./fomcomponent";
import { persons } from "./persons";
import MyComponent from "./proppp";
import Todo from "./todo";

function Personsarray() {
  return persons.map(person =>
    <li>{person.name}</li>)
}



export default function App() {

  return (
    <>
      <h1>Hello ITA {persons[0].name}</h1>
      <ul>
        <Personsarray />

        <SubmitForm />

       
      </ul>


      <MyComponent msg='Wolrd' name='Claus' comp={Personsarray}/>
    
      <Todo />
    </>
  );
}
