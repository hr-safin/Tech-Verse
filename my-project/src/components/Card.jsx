import { useState } from "react";

const Card = ( {data, handleRemove,theme,handleTheme} ) => {
    
    
  return (
    <div className={theme ? "card  bg-base-100 shadow-xl" : "card  bg-base-100  border border-gray-600 rounded-t-xl rounded-b-sm"}>
      <figure>
        <img
          className=" lg:h-[250px] w-full"
          src={data.phonePhoto}
          alt={data.id}
        />
      </figure>
      <div className={theme ? "card-body" : "bg-[#0a192f] text-gray-400 card-body"}>
        <h2 className="card-title">{data.phoneName}</h2>
        <p>Price : {data.phonePrice}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
          <button onClick={() => handleRemove(data.id)} className=" btn btn-warning">remove</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
