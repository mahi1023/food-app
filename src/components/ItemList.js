import { CDN_URL } from "../utils/contants";

const ItemList = ({ item }) => {
  console.log(item);
  return (
    <div>
      {item.map((obj) => (
        <div
          key={obj.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          
          <div className="w-9/12">
            <div className="py-2">
              <span>{obj.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {obj.card.info.price
                  ? obj.card.info.price / 100
                  : obj.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{obj.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
           <div className="absolute">
            <button className="p-2 mx-16 bg-black shadow-lg rounded-lg text-white">Add+</button>
            </div>
            <img src={CDN_URL + obj.card.info.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
