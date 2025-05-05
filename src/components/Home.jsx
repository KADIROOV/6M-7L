import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import getdata from "../request";

export default function Home() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getdata(skip, 8)
      .then((res) => {
        setData((prev) => [...prev, ...res]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [skip]);

  function handleClick() {
    setSkip((prev) => prev + 8);
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {loading && <Loader />}
        {data?.map((item) => {
          return (
            <div key={item.id} className="card bg-base-100 w-full shadow-sm">
              <figure>
                <img src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.description}</p>
                <div className="opacity-75 ml-4">
                  <p>{`Category: ${item.category}`}</p>
                  <p>{`Price: ${item.price}`}</p>
                  <p>{`Rating: ${item.rating}`}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button onClick={handleClick} className="btn">
          More Cards
        </button>
      </div>
    </div>
  );
}
