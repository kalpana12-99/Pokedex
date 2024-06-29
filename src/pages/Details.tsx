import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonDetails, baseImageUrl } from "../api";
import { Card } from "../components/HoverEffect";

const Details = () => {
  const { name } = useParams(); //const name = useParams().name

  const [id, setId] = useState(null);
  const [order, setOrder] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const newName = name ? name : "";
      const data = await getPokemonDetails(newName);

      setOrder(data.order);
      setHeight(data.height);
      setWeight(data.weight);
      setId(data.id);

      setloading(false);
    };

    fetchPokemonDetails();
  }, []);

  return loading ? (
    <div>
      <p className="text-white">loading...</p>
    </div>
  ) : id ? (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-80 md:w-90 h-96 flex flex-col items-center">
        <div>
          <img
            src={`${baseImageUrl}/${id}.svg`}
            alt=""
            className="mx-auto w-70 md:w-80 h-60"
          />
        </div>
        <div className="text-white mt-5 text-center">
          <h1 className="font-bold text-xl mb-2">
            {name && name.charAt(0).toUpperCase() + name.slice(1)}
          </h1>
          <div className="flex gap-4 justify-center">
            <p>Order: {order}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
      </Card>
    </div>
  ) : (
    <div className="text-white flex w-screen h-screen justify-center items-center">
      <Card className="flex w-70 md:80 h-20 justify-center items-center ">
        <p className="font-bold">NO SUCH POKEMON FOUND!</p>
      </Card>
    </div>
  );
};

export default Details;
