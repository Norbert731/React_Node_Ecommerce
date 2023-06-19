import React from "react";
import { Link } from "react-router-dom";
import "./mymeal.scss";

function MyMeal() {
  return (
    <div className="mymeal">
      <div className="container">
        <div className="title">
          <h1>Wszstkie Dania</h1>
          <Link to="/AddMeal" className="default-link">
            <p className="addBtn">Dodaj nowy</p>
          </Link>
        </div>

        <table>
          <tr>
            <th>Zdjęcie</th>
            <th>Nazwa</th>
            <th>price</th>
            <th>Usuń</th>
          </tr>

          <tr>
            <td>
              <img
                src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </td>
            <td>Jedzenie</td>
            <td>39.99</td>
            <td>
              <img src="./img/trash.png" alt="kosz" className="trash" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </td>
            <td>Jedzenie</td>
            <td>39.99</td>
            <td>
              <img src="./img/trash.png" alt="kosz" className="trash" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt=""
              />
            </td>
            <td>Jedzenie</td>
            <td>39.99</td>
            <td>
              <img src="./img/trash.png" alt="kosz" className="trash" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyMeal;
