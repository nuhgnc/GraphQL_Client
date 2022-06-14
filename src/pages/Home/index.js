// 3.Parti Kütüphaneler
import {useEffect} from "react";
import { useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import { List, Avatar } from "antd";

// Modüller
import  styles  from "./styles.module.css";

// Dahili Dosyalar
import Loading  from 'components/Loading/Loading';
import { GET_POST, POST_SUBS } from "./queries";



function Home() {
  const { loading, error, data, subscribeToMore } = useQuery(GET_POST);

  
  useEffect(()=> {
    subscribeToMore({
      document: POST_SUBS,
      updateQuery: ( prev, { subscriptionData }) => {
       if(!subscriptionData) return prev;
       return {
         posts: [subscriptionData.data.postCreated,...prev.posts]

       }
        
      },
      onError: err => console.log(err),
    })
  }, [null])

  if (loading) return <Loading />;
  if (error) return `Error! ${error.message}`;
  
  return (
    <div>
      <List 
        className="demo-loadmore-list"
        loading={false}
        itemLayout="horizontal"
        //loadMore={loadMore}
        dataSource={data.posts}
        renderItem={(item) => (
          <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.user.profile_photo} />}
                title={<Link to={`/post/${item.id}`} className={styles.listTitle}>{item.title}</Link>}
                description={<Link to={`/post/${item.id}`} className={styles.listItem}> {item.short_description} </Link>}
              />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Home;
