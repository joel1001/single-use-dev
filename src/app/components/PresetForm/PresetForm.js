import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { Row, Col, Form, Select } from 'antd';
import "./PresetForm.css";

const { Option } = Select;

const PresetForm = (props) => {
  const { data, itemImage } = props;
  const [activeOz, setActiveOz] = useState(true);
  const [activeLiters, setActiveLiters] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("oz");
  const [activeAttr, setActiveAttr] = useState("");

  function onChange(value) {
    setActiveAttr(value);
  }
  
  const onBlur = () => {
    console.log('blur');
  }
  
  const onFocus = () => {
    console.log('focus');
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    //setModalIsvisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleActiveMeassure = (label) => {
    if(label === "oz") {
        setButtonLabel("oz");
        setActiveOz(true);
        setActiveLiters(false);
        console.log(buttonLabel, activeOz);
    }
    else if (label === "liters") {
        setButtonLabel("liters");
        setActiveOz(false);
        setActiveLiters(true);
        console.log(buttonLabel, activeLiters);
    }
  }

  return (
    <Row>
        <Col span={24}>
          <Form
            name="basic"
            className="preset-modal-form"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            //onFinish={onFinish}
            //onFinishFailed={onFinishFailed}
          >
            <div className="preset-modal-image">
              <img src={itemImage} alt="item image" /> 
            </div>

            <div className="preset-modal-scroll">
            {
              data["categoryTypes"] && (
              <div>
                <h4>Single Use {data["category"]}</h4>
                <Form.Item
                  label={`Select ${data["category"]}`}
                  name={data["category"]}
                  rules={[
                    {
                      required: true,
                      message: `Please select a ${data["category"]}`,
                    },
                    {
                      pattern: /^$|\s+/,
                      message: `Please select a valid ${data["category"]}`,
                    },
                  ]}
                >
                <Select
                  id={data["category"]}
                  showSearch
                  style={{ width: "100%" }}
                  placeholder={`Select ${data["category"]}`}
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  /*onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }*/
                >
                  {data.categoryTypes.map((option, i) => {
                    return (
                      <Option value={option.typeName}>{option.typeName}</Option>
                    )
                  })}
                </Select>
                </Form.Item>
              </div>
              )
            }

            {/*data.categoryTypes.map((catType, i) => {
              if(catType.typeName==activeAttr){
               if(catType.attributes.attr1.label==="Meassurements"){
                return (
                  <div key={i}>
                    <div className="measurement-box">
                      <h4>{catType.attributes.attr1.label}</h4>
                      <div className="measure-button-box">
                        <Button label={catType.attributes.attr1.values.oz.type} className={activeOz ? "measure-button measure-active" : "measure-button"} icon={null} onClickHandler={() => handleActiveMeassure(catType.attributes.attr1.values.oz.type)}/>
                        <Button label={catType.attributes.attr1.values.liters.type} className={activeLiters ? "measure-button measure-active" : "measure-button"} icon={null} onClickHandler={() => handleActiveMeassure(catType.attributes.attr1.values.liters.type)}/>
                      </div>
                    </div>
                    <div>
                      <Form.Item
                        label={`Select ${catType.attributes.attr1.label}`}
                        name={catType.attributes.attr1.label}
                        rules={[
                          {
                            required: true,
                            message: `Please select a ${catType.attributes.attr1.label}`,
                          },
                          {
                            pattern: /^[A-Z0-9 _]*$/,
                            message: `Please select a valid ${catType.attributes.attr1.label}`,
                          },
                        ]}
                      >
                        { activeOz ? (
                          <Select
                          id={catType.attributes.attr1.label}
                          showSearch
                          style={{ width: "100%" }}
                          placeholder={`Select a ${catType.attributes.attr1.label}`}
                          optionFilterProp="children"
                          onFocus={onFocus}
                          onBlur={onBlur}
                          /*onSearch={onSearch}
                          filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                        >
                          {catType.attributes.attr1.values.oz.options &&
                          catType.attributes.attr1.values.oz.options.map((oz, i) => {
                            return ( <Option key={i}>{oz}</Option>);
                          })}
                        </Select>) : (
                            <Select
                            id={catType.attributes.attr1.label}
                            showSearch
                            style={{ width: "100%" }}
                            placeholder={`Select a ${catType.attributes.attr1.label}`}
                            optionFilterProp="children"
                            onFocus={onFocus}
                            onBlur={onBlur}
                            /*onSearch={onSearch}
                            filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {catType.attributes.attr1.values.liters.options &&
                            catType.attributes.attr1.values.liters.options.map((liter, i) => {
                              return ( <Option key={i}>{liter}</Option>);
                            })}
                          </Select>
                        )
                        }
                      </Form.Item>
                    </div>
                  </div>
                  )
               }
              }
              else{
                return null;
              }
            }) */}

            {data.categoryTypes.map((catType, i) => {
                if(catType.typeName==activeAttr){
                  if(catType.attributes) {
                    if(catType.attributes.attr1 && catType.attributes.attr1.label === "Length"){
                      return (
                        <div>
                          <Form.Item
                            label={`Select ${catType.attributes.attr1.label}`}
                            name={catType.attributes.attr1.label}
                            rules={[
                              {
                                required: true,
                                message: `Please select the ${catType.attributes.attr1.label}`,
                              },
                              {
                                pattern: /^[A-Z0-9 _]*$/,
                                message: `Please select a valid ${catType.attributes.attr1.label}`,
                              },
                            ]}
                          >
                            <Select
                              id={catType.attributes.attr1.label}
                              showSearch
                              style={{ width: "100%" }}
                              placeholder={`Select the ${catType.attributes.attr1.label}`}
                              optionFilterProp="children"
                              onFocus={onFocus}
                              onBlur={onBlur}
                              /*onSearch={onSearch}
                              filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              }*/
                            >
                              {catType.attributes.attr1.values &&
                              catType.attributes.attr1.values.map((item, i) => {
                                return ( <Option key={i}>{item}</Option>);
                              })}
                            </Select>
                          </Form.Item>
                        </div>
                      )
                    } else if(catType.attributes.attr2 && catType.attributes.attr2.label === "thickness") {
                      return (
                        <div>
                          <Form.Item
                            label={`Select ${catType.attributes.attr2.label}`}
                            name={catType.attributes.attr2.label}
                            rules={[
                              {
                                required: true,
                                message: `Please select the ${catType.attributes.attr2.label}`,
                              },
                              {
                                pattern: /^[A-Z0-9 _]*$/,
                                message: `Please select a valid ${catType.attributes.attr2.label}`,
                              },
                            ]}
                          >
                            <Select
                              id={catType.attributes.attr2.label}
                              showSearch
                              style={{ width: "100%" }}
                              placeholder={`Select the ${catType.attributes.attr2.label}`}
                              optionFilterProp="children"
                              onFocus={onFocus}
                              onBlur={onBlur}
                              /*onSearch={onSearch}
                              filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                              }*/
                            >
                              {catType.attributes.attr2.values &&
                              catType.attributes.attr2.values.map((item, i) => {
                                return ( <Option key={i}>{item}</Option>);
                              })}
                            </Select>
                          </Form.Item>
                        </div>
                      )
                    } else {
                      return null;
                    }
                  }
                }
              })
            }

            <Form.Item
              wrapperCol={{
                offset: 12,
                span: 12,
                align: 'center'
              }}
            >
              <Button type="primary" htmlType="submit" label="SEND" disabled={true} style={{ verticalAlign: 'middle' }} />
            </Form.Item>
            </div>
          </Form>
        </Col>
      </Row> 
    )
}

export default PresetForm;