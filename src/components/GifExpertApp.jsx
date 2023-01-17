import { useState } from "react";
import Swal from "sweetalert2";
import { InputForm } from "./InputForm";
import { GifsGrid } from "./GifsGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);

  const handleNewCategory = (newCategory) => {
    const result = categories.find(
      (item) => item.toLowerCase() === newCategory.toLowerCase()
    );

    if (!result) {
      setCategories([newCategory, ...categories]);
    } else {
      Swal.fire("Error", "Category already exists", "error");
    }
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      {/* insercion del input para el contenido de gifs */}
      <InputForm data={{ handleNewCategory }} />

      {/* render de categoria - dentro de él se ejecuta los items de cada categoria */}
      {
        categories.map((category) => (
          <GifsGrid key={category} itemCategory={category} />
        ))
      }

    </>
  );
};
