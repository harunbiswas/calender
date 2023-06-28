import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./App.scss";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
function App() {
	return (
		<>
			<Header />
			<Banner />
			<MainSection />
			<Footer />
		</>
	);
}

export default App;
