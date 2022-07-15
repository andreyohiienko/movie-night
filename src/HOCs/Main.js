import { NavLink, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="mx-auto container px-4">
      <div className="prose max-w-none text-center">
        <h1 className="mb-6">Movie Night</h1>
        <ul className="list-none pl-0 flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 hover:bg-green-600  active:bg-green-700 px-5 py-2 text-sm leading-5 rounded-full text-white"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/liked"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-500 hover:bg-green-600  active:bg-green-700 px-5 py-2 text-sm leading-5 rounded-full text-white"
                  : ""
              }
            >
              Liked
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
