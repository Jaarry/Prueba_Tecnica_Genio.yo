import { useReducer, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { initialState, reducer } from './Reducer'; //Importacion de dependencias, hooks y componentes


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('https://fernandafamiliar.soy/wp-json/wp/v2/posts?per_page=10&_embed');
        const notesWithReadStatus = response.data.map(note => ({ ...note, read: false }));
        dispatch({ type: 'SET_NOTES', payload: notesWithReadStatus });
      } catch (error) {
        console.error('Error fetching data from API', error);
      } //Mandar a llamar la API y traer la información requerida
    };

    if (state.notes.length === 0) {
      fetchNotes();
    }
  }, [state.notes.length]);

  const toggleReadStatus = () => {
    if (state.allRead) {
      dispatch({ type: 'UNDO_MARK_ALL_READ' });
    } else {
      dispatch({ type: 'MARK_ALL_READ' });
    } //Lógica para el botón de marcar como leído
  };

  return (
    <div>
      <Header />
      <div className="notes-container">
        <h1>Últimas Notas</h1>
        <ul className="notes-list">
          {state.notes.map(note => (
            <li key={note.id} className={`note-item ${note.read ? 'read' : ''}`}>
              {note._embedded && note._embedded['wp:featuredmedia'] && (
                <img
                  src={note._embedded['wp:featuredmedia'][0].source_url}
                  alt={note.title.rendered}
                  className="note-image"
                />
              )}
              <div className="note-content">
                <h2>{note.title.rendered}</h2>
                <p className="note-date">
                  Publicado: {new Date(note.date).toLocaleString()}
                </p>
                <p className="note-date">
                  Modificado: {new Date(note.modified).toLocaleString()}
                </p>
                <div
                  className="note-excerpt"
                  dangerouslySetInnerHTML={{ __html: note.excerpt.rendered }}
                />
                <a className="buton-main" href={note.link} target="_blank" rel="noopener noreferrer">
                  Leer más
                </a>
              </div>
            </li>
          ))}
        </ul>
        <button
          className={`mark-all-read ${state.allRead ? 'undo-read' : ''}`}
          onClick={toggleReadStatus}
        >
          {state.allRead ? 'Deshacer cambios' : 'Marcar todas como leídas'}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default App;


