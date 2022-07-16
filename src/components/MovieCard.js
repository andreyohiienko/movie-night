import Icon from "icon";
import { getImageUrl } from "utils";

export const MovieCard = (props) => {
  const { onLike, type, ...rest } = props;
  const { id, title, poster_path: posterPath } = rest;
  return (
    <div key={id}>
      <div className="relative">
        <img className="m-0" src={getImageUrl(posterPath)} alt={title} />
        <Icon
          onClick={() => onLike(rest)}
          className="absolute bottom-2 right-2 z-10 cursor-pointer"
          type={type}
        />
      </div>
      <h3>{title}</h3>
    </div>
  );
};
