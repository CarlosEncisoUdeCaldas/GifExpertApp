import { useState } from "react";
import Swal from "sweetalert2";

export const InputForm = ({ data }) => {
  const { handleNewCategory } = data;

  //   useState que controla el input del gif
  const [input, setInput] = useState("");

  //   handle que controla el input
  const handleInput = (e) => {
    const { target } = e;
    setInput(target.value);
  };

  // funcion que maneja el adicionar una categoria
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      Swal.fire("Error", "Input are required", "error");
    } else {
      handleNewCategory(input.trim());
      //   setCategories((categories) => [input.trim(), ...categories]);
      setInput("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Buscar gifs"
          type="text"
          name="input"
          id="input"
          onChange={handleInput}
          value={input}
        />
        <button style={{marginTop: '10px'}}>Agregar</button>
      </form>
    </>
  );
};
