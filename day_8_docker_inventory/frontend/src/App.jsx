import { useEffect, useRef } from "react";

function App() {
  const nameRef = useRef();
  const beschreibungRef = useRef();
  const zimmerRef = useRef();
  const kategorieRef = useRef();

  const createThing = () => {
    fetch("http://localhost:1337", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current.value,
        zimmer: zimmerRef.current.value,
        beschreibung: beschreibungRef.current.value,
        kategorie: kategorieRef.current.value,
      }),
    });
  };

  return (
    <>
      <input type="text" ref={nameRef} placeholder="Name" />
      <input type="text" ref={zimmerRef} placeholder="Zimmer" />
      <input type="text" ref={beschreibungRef} placeholder="Beschreibung" />
      <select ref={kategorieRef} id="">
        <option value="Moebel">Möbel</option>
        <option value="Deko">Deko</option>
      </select>

      <button onClick={createThing}>Erstellen</button>
    </>
  );
}

export default App;
