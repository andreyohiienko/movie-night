import { NavLink, Outlet } from "react-router-dom";

const Main = () => {
  const links = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/liked",
      title: "Liked",
    },
  ];

  return (
    <div className="mx-auto container px-4">
      <div className="prose max-w-none text-center">
        <ul className="list-none pl-0 flex mt-4">
          {links.map(({ to, title }) => (
            <li key={title}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-500 hover:bg-green-600  active:bg-green-700 px-5 py-2 text-sm leading-5 rounded-full text-white"
                    : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
