import { useLazyQuery } from "@apollo/client";
import { Divider, Button, Comment, List } from "antd";
import { CommentOutlined } from "@ant-design/icons";

import { GET_POST_COMMENTS } from "./Queries";
import styles from "./styles.module.css";

function Comments({ id }) {
  const [getPostComments, { loading, data }] = useLazyQuery(GET_POST_COMMENTS, {
    variables: { id },
  });

  return (
    <>
      <Divider>
        <div className={styles.showCommentsBtnContainer}>
          <Button
            type="primary"
            shape="round"
            icon={<CommentOutlined />}
            loading={loading}
            onClick={() => getPostComments()}
          >
            Comments
          </Button>
        </div>
      </Divider>

      {!loading && data && (
        <List
          className="comment-list"
          itemLayout="horizontal"
          dataSource={data.post.comments}
          renderItem={(item) => (
            <li>
              <Comment
                author={item.user.full_name}
                avatar={item.user.profile_photo}
                content={item.text}
              />
            </li>
          )}
        />
      )}
    </>
  );
}

export default Comments;
