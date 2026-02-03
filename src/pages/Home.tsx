import Header from '../components/Header';
import MovieList from '../components/MovieList';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            <main className='pt-16'>
                <Hero />
                <MovieList />
            </main>
            <Footer />
        </div>
    )
}
export default Home;