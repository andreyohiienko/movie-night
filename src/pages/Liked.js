import { useLocalStorage } from "../hooks";
import Icon from "../icon";
import { getImageUrl } from "../utils";

const Liked = () => {
  const [liked, setLiked] = useLocalStorage("likeds");

  const onLike = (movie) => {
    setLiked((prev) => prev.filter((m) => m.id !== movie.id));
  };

  return liked.length ? (
    <div className="grid grid-cols-4 gap-4">
      {liked.map((movie) => {
        const { id, title, poster_path: posterPath } = movie;
        return (
          <div key={id}>
            <div className="relative">
              <img className="m-0" src={getImageUrl(posterPath)} alt={title} />
              <Icon
                onClick={() => onLike(movie)}
                className="absolute bottom-2 right-2 z-10 cursor-pointer"
                type="liked"
              />
            </div>
            <h3>{title}</h3>
          </div>
        );
      })}
    </div>
  ) : null;
};

export default Liked;
