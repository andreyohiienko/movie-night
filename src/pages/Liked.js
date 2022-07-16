import { MovieCard } from "components/MovieCard";
import { useLocalStorage } from "hooks";

const Liked = () => {
  const [liked, setLiked] = useLocalStorage("liked");

  const onLike = (movie) => {
    setLiked((prev) => prev.filter((m) => m.id !== movie.id));
  };

  return (
    <>
      <h1 className="mb-6">Liked Movies</h1>
      {liked.length ? (
        <div className="grid grid-cols-4 gap-4">
          {liked.map((movie) => (
            <MovieCard
              key={movie.id}
              {...movie}
              onLike={onLike}
              type={"liked"}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Liked;
