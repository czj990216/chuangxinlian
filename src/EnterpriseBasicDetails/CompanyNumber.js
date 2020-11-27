import React, { useEffect } from "react";
import { Chart } from "@antv/g2";

function CompanyNumber({ data }) {
  useEffect(() => {
    if(data.length) {
      // let companyData = [
      //   { name: "2019", value: 8925 },
      //   { name: "2018", value: 7568 },
      //   { name: "2017", value: 5012 },
      //   { name: "2016", value: 2522 },
      // ];
      // let companyData = data
      let companyData = [
        { name: "2016", value: 2522 },
        { name: "2017", value: 5012 },
        { name: "2018", value: 7568 },
        { name: "2019", value: 8925 },
      ];
      const chart = new Chart({
      container: "company-number",
      autoFit: true,
    });
    chart.data(companyData);
    chart.axis("value", {
      position: "left",
      line: {
        style:{
          stroke:"white"
        }
      },
      tickLine: {
        style:{
          stroke:"white"
        }
      },
      label: {
        offset: -15,
        formatter: (item) => item + "K",//横轴格式化函数
        style:{
          fill:'#A5B8CA'
        }
      },
      grid: null,
      verticalFactor: 1,
    });
    chart.axis("name", {
      line: {
        style:{
          fill:'white',
          stroke:"white",
          lineWidth:1
        }
      },
      tickLine: {
        style:{
          fill:'white',
          stroke:"white",
          lineWidth:1
        }
      },
      label: {
        style:{
          fill:'#A5B8CA'
        }
      },
    });
    chart.scale("value", { nice: true });
    chart.tooltip(false);
    chart.coordinate().transpose();
    chart
      .interval()
      .position("name*value")
      .color("#4FBDFF")
      .label("value", {
        style: {
          fill: "#4FBDFF",
        },
      });
    chart.render();
    }
 
  },[data]);

  return <div id="company-number"></div>;
}

export default CompanyNumber;
