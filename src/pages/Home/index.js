// 3.Parti Kütüphaneler
import React from "react";
import { useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import { List } from "antd";

// Modüller
import  styles  from "./styles.module.css";

// Dahili Dosyalar
import Loading  from 'components/Loading/Loading';
import { GET_POST } from "./queries";



function Home() {
  const { loading, error, data } = useQuery(GET_POST);
  if (loading) return <Loading />;
  if (error) return `Error! ${error.message}`;
  console.log(data.events)
  
  return (
    <div>
      <h1 style={{textAlign: "center", color: "red", fontSize: 30 }}>EVENTS</h1>
      <List 
        className="demo-loadmore-list"
        loading={false}
        itemLayout="horizontal"
        dataSource={data.events}
        renderItem={(item) => (
          <List.Item>
              <List.Item.Meta
                
                title={<><Link to={`/post/${item.id}`} className={styles.listTitle}>{item.title}</Link><div className={styles.content}>{item.date}</div></>}
                description={<Link to={`/post/${item.id}`} className={styles.listItem}> {item.desc} </Link>}
              />
              
          </List.Item>
        )}
      />
    </div>
  );
}

export default Home;
