import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import notes from './notes';


const createNotes = notes => {
  return (
    <Note 
      key={notes.id}
      title={notes.title}
      content={notes.content}
    />
  )
}

function App() {
  return (
    <>
      <Header /> 
      <Footer />
      {notes.map(createNotes)}
    </>
  );
}

export default App;
