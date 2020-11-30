import React, {useEffect, useState} from "react";
import { People } from "../components";

function TalentShow({data}) {
  const color = [
    "#4FBDFF",
    "#7649FF",
    "#E21FEA",
    "#FF4980",
    "#FFC59B",
    "#41BD7C",
    "#F5FF6D",
    "#F2A2C5",
  ];
  let [a,setA] = useState(null)
  let [b,setB] = useState(null)
  let [c,setC] = useState(null)
  let [d,setD] = useState(null)
  let [e,setE] = useState(null)
  let [f,setF] = useState(null)
  let [g,setG] = useState(null)
  let [h,setH] = useState(null)
  let str1 = [];
  let str2 = [];
  let str3 = [];
  let str4 = [];
  let str5 = [];
  useEffect(() => {
    if(JSON.stringify(data) !== "{}"){
      let arr = []
      console.log(data);
      for(let key in data){
        // console.log([data[key]]);
        arr.push(data[key])
      }
      let total = arr.reduce((i,j) => {
        return i + j
      })
      setA(Math.round((data.academicNum / total)*250))
      setB(Math.round((data.chengduNum / total)*250))
      setC(Math.round((data.chunkNum / total)*250))
      setD(Math.round((data.returneeNum / total)*250))
      setE(Math.round((data.communistPartyMemberNum / total)*250))
      setF(Math.round((data.professionalUserNum / total)*250))
      setG(Math.round((data.largeEnterprisesManagerNum / total)*250))
      setH(Math.round((data.internationalTopUserNum / total)*250 - 1))
    }
  },[data])
  console.log(a,b,c,d,e,f,g,h);
  for (let i = 0; i < 50; i++) {
    if (a) {
      a--;
      str1.push(color[0]);
    } else if (b) {
      b--;
      str1.push(color[1]);
    } else if (c) {
      c--;
      str1.push(color[2]);
    } else if (d) {
      d--;
      str1.push(color[3]);
    } else if (e) {
      e--;
      str1.push(color[4]);
    } else if (f) {
      f--;
      str1.push(color[5]);
    }else if(g){
      g--;
      str1.push(color[6]);
    }else if(h){
      h--;
      str1.push(color[7]);
    }
  }
  for (let i = 0; i < 50; i++) {
    if (a) {
      a--;
      str2.push(color[0]);
    } else if (b) {
      b--;
      str2.push(color[1]);
    } else if (c) {
      c--;
      str2.push(color[2]);
    } else if (d) {
      d--;
      str2.push(color[3]);
    } else if (e) {
      e--;
      str2.push(color[4]);
    } else if (f) {
      f--;
      str2.push(color[5]);
    }else if(g){
      g--;
      str2.push(color[6]);
    }else if(h){
      h--;
      str2.push(color[7]);
    }
  }
  for (let i = 0; i < 50; i++) {
    if (a) {
      a--;
      str3.push(color[0]);
    } else if (b) {
      b--;
      str3.push(color[1]);
    } else if (c) {
      c--;
      str3.push(color[2]);
    } else if (d) {
      d--;
      str3.push(color[3]);
    } else if (e) {
      e--;
      str3.push(color[4]);
    } else if (f) {
      f--;
      str3.push(color[5]);
    }else if(g){
      g--;
      str3.push(color[6]);
    }else if(h){
      h--;
      str3.push(color[7]);
    }
  }
  for (let i = 0; i < 50; i++) {
    if (a) {
      a--;
      str4.push(color[0]);
    } else if (b) {
      b--;
      str4.push(color[1]);
    } else if (c) {
      c--;
      str4.push(color[2]);
    } else if (d) {
      d--;
      str4.push(color[3]);
    } else if (e) {
      e--;
      str4.push(color[4]);
    } else if (f) {
      f--;
      str4.push(color[5]);
    }else if(g){
      g--;
      str4.push(color[6]);
    }else if(h){
      h--;
      str4.push(color[7]);
    }
  }
  for (let i = 0; i < 50; i++) {
    if (a) {
      a--;
      str5.push(color[0]);
    } else if (b) {
      b--;
      str5.push(color[1]);
    } else if (c) {
      c--;
      str5.push(color[2]);
    } else if (d) {
      d--;
      str5.push(color[3]);
    } else if (e) {
      e--;
      str5.push(color[4]);
    } else if (f) {
      f--;
      str5.push(color[5]);
    }else if(g){
      g--;
      str5.push(color[6]);
    }else if(h){
      h--;
      str5.push(color[7]);
    }
  }
  return (
    <div className="talent-show">
      {str1.map((item, index) => (
        <People key={index} color={item} />
      ))}
      <div className="white"></div>
      {str2.map((item, index) => (
        <People key={index} color={item} />
      ))}
      <div className="white"></div>
      {str3.map((item, index) => (
        <People key={index} color={item} />
      ))}
      <div className="white"></div>
      {str4.map((item, index) => (
        <People key={index} color={item} />
      ))}
      <div className="white"></div>
      {str5.map((item, index) => (
        <People key={index} color={item} />
      ))}
      <div className="white"></div>
      <div className="bottom">
        <div className="label">
          <span className="criles" style={{background: `${color[0]}`}} ></span>
          <span>学院派</span>
        </div>
        <div className="label">
					<span className="criles" style={{background: `${color[1]}`}} ></span>
          <span>归蓉派</span>
        </div>
        <div className="label">
					<span className="criles" style={{background: `${color[2]}`}} ></span>
          <span>创客派</span>
        </div>
        <div className="label">
				<span className="criles" style={{background: `${color[3]}`}} ></span>
          <span>海归派</span>
        </div>
        <div className="label">
				<span className="criles" style={{background: `${color[4]}`}} ></span>
          <span>党员</span>
        </div>
        <div className="label">
				<span className="criles" style={{background: `${color[5]}`}} ></span>
          <span>其他职称</span>
        </div>
        <div className="label">
				<span className="criles" style={{background: `${color[6]}`}} ></span>
          <span>大企业高管创业</span>
        </div>
        <div className="label">
				<span className="criles" style={{background: `${color[7]}`}} ></span>
          <span>国际顶尖</span>
        </div>
      </div>
    </div>
  );
}

export default TalentShow;
