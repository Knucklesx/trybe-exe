// import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
      <li>{value}</li>
  )
}

const tarefas = ['acordar', 'ir pra faculdade', 'estudos Trybe', 'aula Trybe', 'estudar faculdade', 'dormir']



function App() {
  return (
    <ul>{tarefas.map((elemento) => Task(elemento))}</ul>
  )
}

export default App;
