import { Liked } from "./liked";
import { Spinner } from "./spinner";
import { Unliked } from "./unliked";

const icons = {
  liked: Liked,
  unliked: Unliked,
  spinner: Spinner,
};

const Icon = ({ type, ...rest }) => {
  if (!type) {
    return "";
  }

  const Component = icons[type];

  return <Component {...rest} />;
};

export default Icon;
