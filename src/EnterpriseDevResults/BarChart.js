import React, { useEffect } from "react";
import { Chart } from "@antv/g2";

function BarChart({data}) {
  useEffect(() => {
    if(data.length){
      let intellectualData = [
        { name: "本年度软著作专利",  cat: "专利" },
        { name: "本年度专利数量",  cat: "专利" },
        { name: "拥有知识产权企业",  cat: "拥有" },
        { name: "申请中知识产权", cat: "知识产权" },
        { name: "知识产权总数", cat: "知识产权" },
      ];
      intellectualData.map((item,index) => {
        data.map((item1,index1) => {
          if(index === index1){
            item.value = item1.value
          }
        })
      })
      const chart = new Chart({
        container: "bar-chart",
        autoFit: true,
        appendPadding: [0, 30, 0, 0],
      });
      chart.data(intellectualData);
      chart.scale({
        value: {
          min: 0,
          nice: true,
        },
      });
      chart.axis("name", {
        title: null,
        tickLine: null,
        label: {
          autoRotate: false,
          style: {
            fill: "#a5b8ca",
          },
        },
        line: {
          style: {
            lineWidth: 1,
            stroke: "#ffffff",
          },
        },
      });
  
      chart.axis("value", {
        grid: null,
        label: null,
        line: {
          style: {
            lineWidth: 1,
            stroke: "#ffffff",
          },
        },
      });
      chart.tooltip(false);
      chart.legend(false);
      chart.coordinate("rect").transpose();
      chart
        .interval()
        .position("name*value")
        .color("cat", ["#e21FEA", "#41BD7C", "#4FBDFF"])
        .size(26)
        .label("value", {
          style: {
            fill: "#4fbdff",
          },
          offset: 10,
          content: (originData) => {
            return (
              (originData.value > 10000
                ? originData.value / 10000 + "万"
                : originData.value) + ""
            ).replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
          },
        });
      chart.render();
    }
  }, [data]);
  return <div id="bar-chart" style={{ height: 100 + "%" }}></div>;
}
export default BarChart;
