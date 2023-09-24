import React from "react";
import ProductsDashboard from "../components/ProductsDashboard.jsx";
const AdminDashBoard = () => {
  return (
    <div className="dashboard-page">
      <div className="left-panel">
        <span className="material-symbols-outlined account-picture">
          account_circle
        </span>
        <h3>Darius C. Ilawa</h3>
        <ul>
          <li>
            <span className="material-symbols-outlined">inventory_2</span>
            Products
          </li>
          <li>
            <span className="material-symbols-outlined">shopping_cart</span>
            Orders
          </li>
          <li>
            <span className="material-symbols-outlined">mail</span>Message
          </li>
          <li>
            <span className="material-symbols-outlined">monitoring</span>Sales
          </li>
          <li>
            <span className="material-symbols-outlined">person</span>User
            Accounts
          </li>
        </ul>
      </div>
      <ProductsDashboard />
    </div>
  );
};

export default AdminDashBoard;
