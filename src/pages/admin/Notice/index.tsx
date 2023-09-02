import { Navigate, useParams } from "react-router-dom";
import { match } from "ts-pattern";
import { Post } from "./Post";
import { TimeLine } from "./TimeLine";

const Notice = () => {
  const { sub, id } = useParams<{ sub: string; id: string }>();

  return match(sub)
    .with("post", () => <Post />)
    .with("timeline", () => <TimeLine />)
    .otherwise(() => {
      return <Navigate to={`/admin/${id}/notice/post`} />;
    });
};

export default Notice;
