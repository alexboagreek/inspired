import { Gender } from "./Gender/Gender";
import

export const Navigation =  () => {
  return (
    <nav>
      <div className="container">
        <Gender />
        <Category />
      </div>
    </nav>
  );
};