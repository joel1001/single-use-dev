import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import Button from "../Button/Button";
import { Select } from 'antd';
// import addImage from "../../../assets/add.png";
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
  SettingOutlined,
} from '@ant-design/icons';
import "./DesignConfig.css";

const { Option } = Select;

const DesignConfig = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const formAttribute = true;

  const openModal = () => {
    setIsOpen(true);
  }

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
  
  /*
  const onSearch = (val) => {
    console.log('search:', val);
  }*/

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
      <div className="manifold-top-wrapper">
        <h2 className="manifold-title">Configure your manifold</h2>
        <div className="design-image">
          {/* <img src={addImage} alt="add image" /> */}
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

export default DesignConfig;