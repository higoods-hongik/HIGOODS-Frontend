import { Navigate, useParams } from "react-router-dom";
import { match } from "ts-pattern";
import { Basic } from "./Basic";
import { Product } from "./Product";
import { Detail } from "./Detail";

const Info = () => {
  const { sub, id } = useParams<{ sub: string; id: string }>();

  return match(sub)
    .with("basic", () => <Basic />)
    .with("product", () => <Product />)
    .with("detail", () => <Detail />)
    .otherwise(() => {
      return <Navigate to={`/admin/${id}/info/basic`} />;
    });
};

export default Info;
