// import logo from './logo.svg';
import './App.css';
import pokemons from './data';
import Header from './Header';
import Cards from './Cards'


function App() {
  return (
    <main>
      <Header title='Pokedex' />
    
      <section className='pokeCards'>
        {pokemons.map((poke) => {
          return <Cards pokemon={poke} key={poke.id} />}
        )}
    
      </section>
    
    </main>
  )
};
export default App;
