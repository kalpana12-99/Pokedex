import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPokemonDetails , baseImageUrl} from "../api";
import { Card } from "../components/HoverEffect";

const Details = () => {
  const { name } = useParams(); //const name = useParams().name

  const [id, setId] = useState(null);
  const [order, setOrder] = useState(null);
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      const newName = name ? name : "";
      const data = await getPokemonDetails(newName);

      setOrder(data.order);
      setHeight(data.height);
      setWeight(data.weight);
      setId(data.id)
    };
  }, []);

  return id ? (
  <div>
    <Card>
      <div>
        <img src={`${baseImageUrl}/${id}.svg`} alt="" />
      </div>
      <div>
        <h1>
         
        </h1>
        <div>
        <p>Order: {order}</p>
        <p>Height: {height}</p>
        <p>Weight: {weight}</p>
        </div>
      </div>
    </Card>
  </div>
  ) :  ()
};

export default Details;
