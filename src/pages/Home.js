import { useAxiosGet, useLocalStorage } from "hooks";
import Icon from "icon";
import { MovieCard } from "components/MovieCard";

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
    <>
      <h1 className="mb-6">Movie Night</h1>
      {loading ? <Icon type="spinner" /> : null}
      {data?.results.length ? (
        <div className="grid grid-cols-4 gap-4">
          {data.results.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              onLike={onLike}
              type={likedIds.includes(movie.id) ? "liked" : "unliked"}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Home;
