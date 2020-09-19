// import '@style/navBar/navBar.less'
import { Row, Col, Menu } from 'antd'
const navBar = () => (
  <>
    <header>
      <Row>
        <Col span={4}>
          <h1>
            <a id="logo">
              {/* <img alt="logo" /> */}
              前端社区
            </a>
          </h1>
        </Col>
        <Col span={16}>
          <div id="search-box" className="narrow-mode"></div>
          <Menu mode="horizontal" selectedKeys={['post']}>
            <Menu.Item key="post">文章</Menu.Item>
            <Menu.Item key="column">专栏</Menu.Item>
            <Menu.Item key="topic">话题</Menu.Item>
            <Menu.Item key="circle">圈子</Menu.Item>
            <Menu.Item key="job">内推</Menu.Item>
            <Menu.Item key="ask">问答</Menu.Item>
          </Menu>
        </Col>
        <Col span={4}>22</Col>
      </Row>
    </header>
  </>
)

export default navBar
