import { Switch, Route } from "react-router-dom";
import { Row, Col } from "antd";

import styles from "./styles.module.css";

import Home from "pages/Home";
import NewPost from "pages/NewPost";
import HeaderMenu from "./HeaderMenu";

function App() {
  return (
    <div className={styles.container}>
      <Row justify="center">
        <Col span={14} >
        <HeaderMenu />
        <div className={styles.content}>
        <Switch>
          <Route path="/new"><NewPost /></Route>
          <Route path="/"><Home /></Route>
          </Switch>
        </div>
          
        </Col>
      </Row>
    </div>
  );
}

export default App;
