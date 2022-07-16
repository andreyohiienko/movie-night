import { useLocalStorage, useMovies } from "hooks";
import Icon from "icon";
import { MovieCard } from "components/MovieCard";

const Home = () => {
  const [liked, setLiked] = useLocalStorage("liked", []);
  const { data, isFetching, error } = useMovies();

  const likedIds = liked?.map((movie) => movie.id);

  const onLike = (movie) => {
    setLiked((prev) =>
      likedIds.includes(movie.id)
        ? prev.filter((m) => m.id !== movie.id)
        : [...prev, movie],
    );
  };

  return (
    <>
      <h1 className="mb-6">Movie Night</h1>
      {isFetching ? <Icon type="spinner" /> : null}
      {data?.length ? (
        <div className="grid grid-cols-4 gap-4">
          {data.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              onLike={onLike}
              type={likedIds.includes(movie.id) ? "liked" : "unliked"}
            />
          ))}
        </div>
      ) : null}
      {error ? <p className="text-red-500">{error.message}</p> : null}
    </>
  );
};

export default Home;
