import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Typography, Image } from "antd";

import { GET_1POST } from "./Queries";
import Loading from "components/Loading/Loading";

function Post() {
  const { Title } = Typography;
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_1POST, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return `Error! ${error.message}`;

  const { post } = data;
  console.log("data : ", post);
  console.log(id);

  return (
    <div>
      <Title level={3}>{post.title} </Title>
        <Image  src={post.cover}/> <br /> <br />
      <div>
        { post.description }
      </div>
    </div>
  );
}


export default Post;
