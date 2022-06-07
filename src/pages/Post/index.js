import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Typography, Image  } from "antd";

import { GET_1POST } from "./Queries";
import Loading from "components/Loading/Loading";
import Comments from "./Comments";
import styles from "./styles.module.css";

function Post() {
  const { Title } = Typography;
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_1POST, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return `Error! ${error.message}`;

  const { post } = data;

  return (
    <div>
      <Title level={3}>{post.title} </Title>
      <Image src={post.cover}/>
      <div className={styles.description}> { post.description }</div>
      
      <Comments id={id} />

      
    </div>
  );
}


export default Post;
