import React, { useEffect } from "react";
import { Chart } from "@antv/g2";

function ColumnarChart({ data }) {
  useEffect(() => {
    if(data.length){
      // let financingData = data.map((item) => {
      //   item.sameValue = item.value + 5
      //   return item
      // })
      let financingData = [
        { name: "种子轮", value: 46, sameValue: 50 },
        { name: "天使轮", value: 40, sameValue: 46 },
        { name: "A轮", value: 30, sameValue: 40 },
        { name: "B轮", value: 20, sameValue: 30 },
        { name: "C轮", value: 35, sameValue: 40 },
        { name: "D轮", value: 30, sameValue: 40 },
        { name: "ipo", value: 28, sameValue: 32 },
        { name: "园区自由基金", value: 40, sameValue: 50 },
      ];
  
      const chart = new Chart({
        container: "columnar-chart",
        autoFit: true,
        appendPadding: [0, 10, 0, 0],
      });
      chart.data(financingData);
      chart.scale({
        value: {
          min: 0,
          max: 50,
        },
        sameValue: {
          min: 0,
          max: 50,
        },
      });
      chart.legend(false);
      chart.axis("sameValue", false);
      chart.axis("value", {
        title: null,
        line: {
          style: {
            lineWidth: 1,
            stroke: "#ffffff",
          },
        },
        grid: null,
        label: {
          formatter: (val) => {
            return val === 0 ? 0 : val + "K";
          },
          style: {
            fill: "#a5b8ca",
          },
        },
      });
      chart.axis("name", {
        label: {
          style: {
            textAlign: "center",
            fontSize: 12,
            fill: "#a5b8ca",
          },
          autoRotate: false,
          autoHide: false,
        },
        line: {
          style: {
            lineWidth: 1,
            stroke: "#ffffff",
          },
        },
        tickLine: null,
      });
      chart.tooltip(false);
      chart.interval().position("name*value").color("#4FBDFF");
      chart.line().position("name*sameValue").color("#4FBDFF").size(0.5);
      chart
        .point()
        .position("name*sameValue")
        .color("#4FBDFF")
        .size(3)
        .shape("circle");
  
      chart.interaction("active-region");
      chart.removeInteraction("legend-filter"); // 自定义图例，移除默认的分类图例筛选交互
      chart.render();
    }
  }, [data]);
  return <div id="columnar-chart" style={{ height: 100 + "%" }}></div>;
}
export default ColumnarChart;
