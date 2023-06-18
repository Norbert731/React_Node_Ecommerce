import "./mymeal.scss";
import React from "react";

function MyMeal() {
  return (
    <div className="mymeal">
      <div className="container">
        <h1>Wybrane jedzenie</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Zdjęcie</th>
            <th>Nazwa</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyMeal;
