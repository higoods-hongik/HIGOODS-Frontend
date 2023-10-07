import { Navigate, useParams } from "react-router-dom";
import { match } from "ts-pattern";
import { Waiting } from "./Waiting";
import { Payed } from "./Payed";

const Buyer = () => {
  const { sub, id } = useParams<{ sub: string; id: string }>();

  return match(sub)
    .with("waiting", () => <Waiting />)
    .with("payed", () => <Payed />)
    .otherwise(() => {
      return <Navigate to={`/admin/${id}/buyer/waiting`} />;
    });
};

export default Buyer;
