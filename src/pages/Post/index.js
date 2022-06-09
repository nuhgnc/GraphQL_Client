import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Typography, Image  } from "antd";

import { GET_EVENT_DETAILS } from "./Queries";
import Loading from "components/Loading/Loading";
import Comments from "./Comments";
import styles from "./styles.module.css";

function Post() {
  const { Title } = Typography;
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_EVENT_DETAILS, { variables: { id } });

  if (loading) return <Loading />;
  if (error) return `Error! ${error.message}`;

  const   event  = data.event[0]
  console.log(event)

  return (
    <div>
      <Title level={3}>{event.title} </Title>
      <div className={styles.description}> { event.desc }</div> <br />
      <div>
      <Title level={5}>Etkinlik sahibi</Title>{ event.user[0].username }
      <Title className={styles.eventPlace} level={5}>Etkinlik Mekanı</Title> 
      <div className={styles.eventPlace}> { event.location[0].name } </div>
      </div>
      <Comments id={id} />

      
    </div>
  );
}


export default Post;
