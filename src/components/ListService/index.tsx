import ItemService from "./ItemService";
import "./ListService.scss";

const title = "Our Best Services";

export default function ListService() {
  return (
    <div className="wrapper__services">
      <div className="wrapper__services__top">
        <h2 className="wrapper__services__top__title">
          {title}
        </h2>
        <hr />
      </div>
      <ItemService />
    </div>
  );
}
