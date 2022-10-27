import './App.css';
import Usestate from './components/Usestate';
// import Input from './components/Input';
// import Login from './components/Login';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import Note from './components/Note';
// import notes from './notes';


// const createNotes = notes => {
//   return (
//     <Note 
//       key={notes.id}
//       title={notes.title}
//       content={notes.content}
//     />
//   )
// }

// var isLoggedIn = false;

function App() {
  

  return (
    <>
      {/* <Header /> 
      <Footer />
      {notes.map(createNotes)} */}

      {/* <div className="container"> {
          isLoggedIn === true ? <h1>Hello</h1> : <Login /> 
        }
      </div> */}

      <Usestate />


    </>
  );
}

export default App;
