import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import Button from "../Button/Button";
import { Menu, Dropdown, Input, Row, Col, Form, Select } from 'antd';
// import addImage from "../../../assets/add.png";
import manifold from "../../../assets/manifold.png"
import connector from "../../../assets/items/connector.png";
import tubings from "../../../assets/items/tubings.png";
import bags from "../../../assets/items/bag.png";
import filter from "../../../assets/items/filter.png";
import fittings from "../../../assets/items/fittings.png";
import bottles from "../../../assets/items/bottle.png";
import accessories from "../../../assets/items/accessories.png";
import specialItem from "../../../assets/items/special-item.png";
import defaultImage from "../../../assets/items/default-image.png";
import ModalCommon from "../../util/Modal/modalCommon";
import {
  SettingOutlined, MoreOutlined
} from '@ant-design/icons';
import "./ManifoldConfig.css";
import Threekit_Player from '../Threekit/Player'

const volumnJson = [
  {
    amount: '2',
    category: 'Tubing',
    company: 'Saint-Gobain',
    label: 'C-Flex',
    material: 'Silicone',
    ID: '1/8',
    OD: '3/8',
    wall: '3/4',
    length: '1m',
    fillingVol: '-',
    holdupVol: '8 ml'
  },
  {
    amount: '5',
    category: 'Bags',
    company: 'Entegris',
    label: '',
    material: 'PP',
    ID: '-',
    OD: '-',
    wall: '-',
    length: '-',
    fillingVol: '5 L',
    holdupVol: '-'
  }
]

const { Option } = Select;

const ManifoldConfig = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [pdfRowData, setPdfRowData] = useState(null);
  const [isvisible, setModalIsvisible] = useState(false);

  const menu = () => {
    return (
      <Menu>
        
        <Menu.Item key="0" onClick={showModal}>
          <span>Share</span>
        </Menu.Item>
      </Menu>
    )
  };

  const formAttribute = true;

  const openModal = () => {
    setIsOpen(true);
  }

  const showModal = () => {
    setModalIsvisible(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  function onChange(value) {
    console.log(`selected ${value}`);
  }
  
  const onBlur = () => {
    console.log('blur');
  }
  
  const onFocus = () => {
    console.log('focus');
  }

  const handleCancel = () =>{
    setModalIsvisible(false);
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    window.open("/pdf-page");
    setModalIsvisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="manifold">
      {modalIsOpen && (
        <ModalCommon 
          isModalVisible={openModal} 
          handleCancel={closeModal} 
          modalTitle="" 
          classProp="preset-modal" 
          modalWidth="40vw"
        >
          <form className="preset-modal-form">
            <div className="preset-modal-image">
              {/* <img src={addImage} alt="add image" /> */}
            </div>
            <h4>Single Use Bag</h4>
            {formAttribute && (
              <>
                <label htmlFor="model">Select a bag</label>
                <Select
                  id="model"
                  showSearch
                  style={{ width: "100%" }}
                  placeholder="Select a bag"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  /*onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }*/
                >
                  <Option value="Allegro 1">Allegro 1</Option>
                  <Option value="Allegro 2">Allegro 2</Option>
                  <Option value="Allegro 3">Allegro 3</Option>
                </Select>
              </>
            )}
            <div className="measurement-box">
              <h4>Measurement</h4>
              <div className="measure-button-box">
                <Button label="oz" className="measure-button measure-active" icon={null} onClickHandler={() => {}}/>
                <Button label="liters" className="measure-button" icon={null} onClickHandler={() => {}}/>
              </div>
            </div>
            <label htmlFor="capacity">Capacity</label>
            <Select
              id="capacity"
              showSearch
              style={{ width: "100%" }}
              placeholder="---"
              optionFilterProp="children"
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              /*onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }*/
            >
              <Option value="Custom">Custom</Option>
              <Option value="0.5 Oz">0.5 Oz</Option>
              <Option value="33 Oz">33 Oz</Option>
            </Select>
          </form>
        </ModalCommon>
      )}
      <div>
      {isvisible && 
        <ModalCommon modalTitle="Share by email" isModalVisible={isvisible} handleCancel={handleCancel} classProp="modalPopup">
          <h3>Lorem ipsum lorem amet</h3>
          <div className="pdfShareForm">
            {/* <Row>
              <Col span={12}><label>Email</label></Col>
            </Row> */}
            <Row>
              <Col span={24}>
                <Form
                  name="basic"
                  labelCol={{
                    span: 24,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please input email address',
                      },
                      {
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Please input valid email address',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    wrapperCol={{
                      offset: 12,
                      span: 12,
                      align: 'center'
                    }}
                  >
                    <Button type="primary" htmlType="submit" label="SEND" disabled={true} style={{ verticalAlign: 'middle' }} />
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </div>
        </ModalCommon>
      }
      </div> 
      <div className="manifold-top-wrapper">
        <h2 className="manifold-title">Configure your manifold</h2>
        <div className="manifold-image configure-manifold">
          { <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <a className="ant-dropdown-link manifold-btn-right" onClick={e => e.preventDefault()}>
              <MoreOutlined className="icon-manifold-outline" />
            </a>
          </Dropdown> }
          
          <div id='threekit-embed' style={{height: '100%', width: '100%', position: 'relative', bottom: '33%'}}>
            <Threekit_Player idSelector='threekit-embed' model={sessionStorage.getItem("currentIdPresetOnFocusTwoD")}/>
          </div>
           <Button icon={<MoreOutlined className="icon-manifold" />} label={null} className="manifold-btn-right" />
          <Button label={null} className="config-icon-box" icon={<SettingOutlined className="config-icon" />} onClickHandler={openModal}/> 
        </div>
      </div>
      <div className="manifold-bottom-wrapper">
        <div className="manifold-bottom">
          <div className="item-container">
            <div className="item-img-box">
              <img className="item item-1" src={connector} alt="item" />
            </div>
            <span className="item-title">Connector</span>
          </div>
          <div className="item-container">
            <div className="item-img-box">
              <img className="item item-2" src={tubings} alt="item" />
            </div>
            <span className="item-title">Tubings</span>
          </div>
          <div className="item-container">
            <div className="item-img-box">
              <img className="item item-3" src={bags} alt="item" />
            </div>
            <span className="item-title">Bags</span>
          </div>
          <div className="item-container">
            <div className="item-img-box">
              <img className="item item-4" src={filter} alt="item" />
            </div>
            <span className="item-title">Filter</span>
          </div>
          <div className="item-container">
            <div className="item-img-box">
              <img className="item item-5" src={fittings} alt="item" />
            </div>
            <span className="item-title">Fittings</span>
          </div>
          <div className="item-container">
            <div className="item-img-box">
              <img className="item item-6" src={bottles} alt="item" />
            </div>
            <span className="item-title">Bottles</span>
          </div>
          <div className="item-container">
            <div className="item-img-box">
              <img className="item item-7" src={accessories} alt="item" />
            </div>
            <span className="item-title">Accessories</span>
          </div>
          <div className="item-container">
            <div className="item-img-box">
              <img className="item item-8" src={specialItem} alt="item" />
            </div>
            <span className="item-title">Special Item</span>
          </div>
          <div className="item-container">
            <div className="item-img-box">
              <img className="item item-8" src={defaultImage} alt="item" />
            </div>
            <span className="item-title">Extra 1</span>
          </div>
          <div className="item-container">
            <div className="item-img-box">
              <img className="item item-8" src={defaultImage} alt="item" />
            </div>
            <span className="item-title">Extra 2</span>
          </div>
          <div className="item-container">
            <div className="item-img-box">
              <img className="item item-8" src={defaultImage} alt="item" />
            </div>
            <span className="item-title">Extra 3</span>
          </div>
          <div className="item-container">
            <div className="item-img-box">
              <img className="item item-8" src={defaultImage} alt="item" />
            </div>
            <span className="item-title">Extra 4</span>
          </div>
        </div>
        <div className="manifold-footer">
          <ExclamationCircleOutlined className="icon-manifold-footer" />
          <p>if you don't have the real sizes, you could use aproximate sizes. 
            We stay tunned 
            <Link to="/" className="link">
              back to home
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ManifoldConfig;