import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div class="card w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
