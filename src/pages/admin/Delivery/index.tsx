import { Navigate, useParams } from "react-router-dom";
import { match } from "ts-pattern";
import { Handout } from "./Handout";
import { Parcel } from "./Parcel";

const Delivery = () => {
  const { sub, id } = useParams<{ sub: string; id: string }>();

  return match(sub)
    .with("parcel", () => <Parcel />)
    .with("handout", () => <Handout />)
    .otherwise(() => {
      return <Navigate to={`/admin/${id}/delivery/parcel`} />;
    });
};

export default Delivery;
