import React from "react";
import { useQuery } from '@apollo/client';

import { List, Avatar } from "antd";

import Loading  from 'components/Loading/Loading';
import { GET_POST } from "./queries";



function Home() {
  const { loading, error, data } = useQuery(GET_POST);
  if (loading) return <Loading />;
  if (error) return `Error! ${error.message}`;
  console.log("data : ",data)
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
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
          </List.Item>
        )}
      />
    </div>
  );
}

export default Home;
