import { getImageUrl } from "../utils";
import { Link } from "react-router-dom";
import { useAxiosGet, useLocalStorage } from "../hooks";
import Icon from "../icon";

const Home = () => {
  const [likeds, setLikeds] = useLocalStorage("likeds", []);
  const { data, loading } = useAxiosGet("/movie/popular");

  const likedIds = likeds?.map((movie) => movie.id);

  const onLike = (movie) => {
    setLikeds((prev) =>
      likedIds.includes(movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie],
    );
  };

  return (
    <div className="mx-auto container px-4">
      <div className="prose max-w-none text-center">
        <h1 className="mb-6">Movie Night</h1>
        <ul className="list-none pl-0 flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/liked">Liked</Link>
          </li>
        </ul>
        {loading ? <Icon type="spinner" /> : null}
        {data?.results.length ? (
          <div className="grid grid-cols-4 gap-4">
            {data.results.map((movie) => {
              const { id, title, poster_path: posterPath } = movie;
              return (
                <div key={id}>
                  <div className="relative">
                    <img
                      className="m-0"
                      src={getImageUrl(posterPath)}
                      alt={title}
                    />
                    <Icon
                      onClick={() => onLike(movie)}
                      className="absolute bottom-2 right-2 z-10 cursor-pointer"
                      type={likedIds.includes(id) ? "liked" : "unliked"}
                    />
                  </div>
                  <h3>{title}</h3>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
