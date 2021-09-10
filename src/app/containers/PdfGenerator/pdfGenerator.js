import React, { useState, useEffect } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import "./pdfGenerator.css";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { EMAIL_SEND_PDF } from '../../api/baseUrl';
import { get, post } from '../../api/api';

import manifoldImg from '../../../assets/manifold.png';
import Threekit_Player from '../../components/Threekit/Player';
import threekitHelper from "../../util/threekit";
import threekitConfig from '../../../config/threekitConfig';

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

const PdfDocument = ({ props }) => {
  const [pdfRowData, setPdfRowData] = useState([]);
  const [apiMessage, setApiMessage] = useState('');

  const setpdfData = async () => {

    // let image = new Image();
    // let imgSrc = await player.snapshotAsync();
    // image.src = imgSrc;
    let products = await threekitHelper.fetchProducts(
      threekitConfig.productId
    );
    let productId = sessionStorage.getItem("currentIdPresetOnFocusThreeD");
    const currentProd = products.filter(item =>{
      if(item.id == productId){
        return item
      }
      return
    });
    console.log("threekit image", currentProd);
    // setPdfRowData(volumnJson);
    // console.log("pdf data", pdfRowData);
    const input = document.querySelector("#divToPrint")//docPdf();
    // await html2canvas(input).then((canvas) => {
    //   document.body.appendChild(canvas);
    //   const imgData = canvas.toDataURL('image/png');
    //   const pdf = new jsPDF();
    //   pdf.addImage(imgData, 'JPEG', 0, 0);
    //   pdf.output('dataurlnewwindow');
    //   pdf.save("download.pdf");
    // });
    const bodyParser = {
      to: "",
      html: input
    }
    // console.log("bodyParser", bodyParser);
    // return
    const reqObj = {
      productId: sessionStorage.getItem("currentIdPresetOnFocusTwoD"),
      // linkpreview: products.attributes.images[0]
    }
  console.log("reqObj", reqObj);
    // post(EMAIL_SEND_PDF, reqObj).then(res => {
    //   console.log("Mail send response response => ", res);
    // }).catch(err => {
    //   console.log("Error response => ", err);
    // });
    // setTimeout(() => {
    //   window.close();
    // }, 200);

  }

  useEffect(() => {
    setpdfData();
  }, []);

  return (<Document>
    <Page size="A4">
      <div id="divToPrint" className="mt4">
        <table>
          <tr>
            <td colSpan="8">
            <div id='threekit-embed' style={{ height: '100%', width: '100%', position: 'relative', bottom: '33%' }}>
              <Threekit_Player idSelector='threekit-embed' model={sessionStorage.getItem("currentIdPresetOnFocusTwoD")} />
            </div>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <th style={{ fontSize: 11 }}>Amount</th>
            <th style={{ fontSize: 11 }}>Category</th>
            <th style={{ fontSize: 11 }}>Company</th>
            <th style={{ fontSize: 11 }}>Label</th>
            <th style={{ fontSize: 11 }}>Material</th>
            <th style={{ fontSize: 11 }}>ID</th>
            <th style={{ fontSize: 11 }}>OD</th>
            <th style={{ fontSize: 11 }}>Wall</th>
            <th style={{ fontSize: 11 }}>Length</th>
            <th style={{ fontSize: 11 }}>Filling volume</th>
            <th style={{ fontSize: 11 }}>Holdup volume</th>
          </tr>
          <tr>
            <td style={{ fontSize: 11 }}>2</td>
            <td style={{ fontSize: 11 }}>Tubing</td>
            <td style={{ fontSize: 11 }}>Saint-Gobain</td>
            <td style={{ fontSize: 11 }}>C-Flex</td>
            <td style={{ fontSize: 11 }}>Silicone</td>
            <td style={{ fontSize: 11 }}>1/8</td>
            <td style={{ fontSize: 11 }}>3/8</td>
            <td style={{ fontSize: 11 }}>3/4</td>
            <td style={{ fontSize: 11 }}>1m</td>
            <td style={{ fontSize: 11 }}>-</td>
            <td style={{ fontSize: 11 }}>8ml</td>
          </tr>
        </table>
      </div>
    </Page>
  </Document>);
}

export default PdfDocument;
