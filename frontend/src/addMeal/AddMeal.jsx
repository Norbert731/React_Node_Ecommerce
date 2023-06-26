import React from "react";
import "./addmeal.scss";

function AddMeal() {
  return (
    <div className="addMeal">
      <div className="container">
        <label htmlFor="">Nazwa</label>
        <input type="text" placeholder="Podaj nazwe posiłku" />
        <label htmlFor="">Kategoria</label>
        <select name="categorys" id="categorys">
          <option value="salatki">Sałatki</option>
          <option value="zupy">Zupy</option>
          <option value="przystawki">Przystawki</option>
          <option value="sniadania">Śniadania</option>
          <option value="obiady">Obiady</option>
          <option value="makarony">Makarony</option>
          <option value="desery">Desery</option>
          <option value="wina">Wina</option>
        </select>
        <label htmlFor="">Zdjęcie</label>
        <input type="file" />
        <label htmlFor="">Składniki</label>
        <textarea
          cols="30"
          rows="16"
          placeholder="Podaj liste składników"
        ></textarea>
        <label htmlFor="">Cena</label>
        <input type="number" min={1} />
        <button>Dodaj posiłek</button>
      </div>
    </div>
  );
}

export default AddMeal;
