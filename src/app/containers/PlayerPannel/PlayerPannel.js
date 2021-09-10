import React, { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import ModalCommon from '../../util/Modal/modalCommon';
import { Menu, Dropdown, Input, Row, Col, Form, Icon } from 'antd';
//import  {Accordion} from 'react-bootstrap';	
import Accordion from 'react-bootstrap/Accordion'
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import singleUseVideo from "../../../assets/3D-konfigurator-sus.mp4";

import {
    QuestionCircleOutlined,
    FundProjectionScreenOutlined,
    MessageOutlined,
    ExclamationCircleOutlined,
    InfoCircleOutlined,
    CheckCircleOutlined
} from '@ant-design/icons';
import "./PlayerPannel.css";

const screenWidth = window.screen.width;
const { TextArea } = Input;

const customStyles = {
    overlay: {
      position: 'fixed',
      zIndex: '1000',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #fff',
      background: '#fff',
      boxShadow: '0 -2rem 6rem rgba(0, 0, 0, 0.3)',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
    }
};

const PlayerPannel = (props) => {
  const { className, iconClassName } = props;
  const [isvisible, setModalIsvisible] = useState(false);	
  const [modal, setModal] = useState('');	
  const [modalName, setModalName] = useState('');	

  const showModal = (modalName, modalTitle) => {
    setModalIsvisible(true);
    setModalName(modalTitle);

    if (modalName == 'video')
      setModal(modalName);
    else if (modalName == 'message')
      setModal(modalName);
    else if (modalName == 'questions')
      setModal(modalName);
    else if (modalName == 'info')
      setModal(modalName);
    else if (modalName == 'success')
      setModal(modalName); 
  }

  const handleCancel = () => {
    setModalIsvisible(false);
  }

  const showVideoModal = () => {

    return (
      <div className="video-player-box">
          <VideoPlayer url={singleUseVideo}/>
      </div>
    )
  };

  const showMessageModal = () => {

    return (
      <div>
        <h3 className="pdf-share-title">We will answer you soon</h3>
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
              //onFinish={onFinish}
              //onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter name',
                    },
                    {
                      pattern: /^[a-zA-Z ]/,
                      message: 'Please enter valid name',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
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
                  label="Message"
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: 'Please input message',
                    }
                  ]}
                >
                  <TextArea placeholder="Write a message..." rows={6} />
                </Form.Item>
                <div className="send-button-box">
                  <Form.Item>
                    <Button type="primary" htmlType="submit" label="SEND" className="send-button" onClickHandler={() => { showModal('success', '') }}/>
                  </Form.Item>
                </div>
              </Form>
            </Col>
          </Row>
        </div>

      </div>
    )
  };


  const showQuestionsModal = () => {

    return (
      <div style={{fontSize:'15px'}}>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Is there benefit of using plate freezer?</Accordion.Header>
            <Accordion.Body>
            Yes, there is a huge benefit of using a plate freezer. The benefit of a plate freezer is that the freezing process can be controlled very accurate, and it is independent of the amount of shells you put inside the plate freezer
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Can ROSS be partially filled?</Accordion.Header>
            <Accordion.Body>
            Yes, any partial filling volume is possible with the patented RoSS® technology. The most recent data sheet with all RoSS® versions and details regarding partial filling is available in the download area or via mail (office@susupport.com)
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

      </div>
    )
  };

  const showInfoModal = () => {

    return (
      <div className="info-modal-container">
        <div><InfoCircleOutlined className="centered" /> </div>
        <div>
          <h1>If you don't have the real sizes,</h1>
          <div className="pdf-share-title">you could use approximate sizes.We stay tuned</div>
        </div>
      </div>
    )
  };

  const showSuccessModal = () => {

    return (
      <div style={{marginLeft:'45%'}}>
        <div><CheckCircleOutlined className="centered" /> </div>
        <div>
          <h1>Successful submission</h1>
          <div>Lorem ipsum dolor sit ame. </div>
        </div>
      </div>
    )
  };

  return (
    <div>
      <div className="buttons-container">
        {/*<PlayerButton icon={<QuestionCircleOutlined className="icon-size" />} onClickHandler={() => {}}/>*/}
       {/*<Button label={null} className={className} icon={<QuestionCircleOutlined className={iconClassName} />} onClickHandler={() => { showModal('questions', 'FAQ') }} />
       */} <Button label={null} className={className} icon={<FundProjectionScreenOutlined className={iconClassName} />} onClickHandler={() => { showModal('video', 'Single Use Support') }} />
        <Button label={null} className={className} icon={<MessageOutlined className={iconClassName} />} onClickHandler={() => { showModal('message', "Share your questions and comments") }} />
        <Button label={null} className={className} icon={<ExclamationCircleOutlined className={iconClassName} />} onClickHandler={() => { showModal('info', '') }} />
      </div>
      <ModalCommon modalTitle={modalName} isModalVisible={isvisible} handleCancel={handleCancel} modalWidth={screenWidth - 600} classProp="modalPopup">
        {modal == 'video' ? showVideoModal() : null}
        {modal == 'message' ? showMessageModal() : null}
        {modal == 'questions' ? showQuestionsModal() : null}
        {modal == 'info' ? showInfoModal() : null}
        {modal == 'success' ? showSuccessModal() : null}
      </ModalCommon>
    </div>
  )
}

export default PlayerPannel;