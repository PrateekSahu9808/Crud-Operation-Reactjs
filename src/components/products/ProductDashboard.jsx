import React from "react";
import Styles from "./_product.module.css";
import { NavLink, Outlet } from "react-router-dom";
const ProductDashboard = () => {
  return (
    <section id={Styles.productDashboard}>
      <article>
        <aside className={Styles.sidebar}>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${Styles.active}` : "inactive"
                }
                to="/product-dashboard"
                end
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${Styles.active}` : "inactive"
                }
                to="/product-dashboard/add-product"
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${Styles.active}` : "inactive"
                }
                to="/product-dashboard/add-product1"
              >
                update product
              </NavLink>
            </li>
          </ul>
        </aside>
        <aside className={Styles.mainContainer}>
          <main className={Styles.container}>
            <Outlet />
          </main>
        </aside>
      </article>
    </section>
  );
};

export default ProductDashboard;
