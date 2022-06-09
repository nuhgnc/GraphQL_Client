import { useQuery, useLazyQuery  } from "@apollo/client";
import { Divider, Button, Comment, List } from "antd";
import {  AccountBookFilled } from "@ant-design/icons";

import { GET_EVENT_PARTICIPANTS } from "./Queries";
import styles from "./styles.module.css";

function Comments({ id }) {
  const [getParticipants,{ loading, error, data }] = useLazyQuery(GET_EVENT_PARTICIPANTS, {
    variables: { id },
  });


  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  
  return (
    <>
      <Divider>
        <div className={styles.showCommentsBtnContainer}>
          <Button
            type="primary"
            shape="round"
            icon={<AccountBookFilled />}
            loading={loading}
            onClick={()=>getParticipants()}
            
          >
            Comments
          </Button>
        </div>
      </Divider>

      {!loading && data && (
        <List
          className="comment-list"
          itemLayout="horizontal"
          dataSource={data.event}
          renderItem={(item) => (
            <li>
              
              <Comment
                author={item.participant[0].username[0].username}
                content={item.participant[0].username[0].email}

              />
            </li>
          )}
        />
        
      )}
      
    </>
    
  );
}

export default Comments;
