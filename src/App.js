import Row from "./components/Row";
import Banner from "./components/Banner";
import request from "./requests";

const App = () => {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Banner />
      <Row
        title="NEFTLIX ORIGINALS"
        fetchURL={request.fetchNetFlixOriginals}
        isLargeRow
      />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchURL={request.fetchRomanticMovies} />
      <Row title="Documentries" fetchURL={request.fetchDocumentaries} />
    </div>
  );
};

export default App;
