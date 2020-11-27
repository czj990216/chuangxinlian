import React, { useEffect } from "react";
import { Chart } from "@antv/g2";

function JobNumber({data}) {
  useEffect(() => {
    if(data.length){
      let employeeData = data
      const chart = new Chart({
        container: "job-number",
        autoFit: true,
      });
      chart.data(employeeData);
      chart.scale("value", {
        nice: true,
      });
      chart.axis("name", {
        tickLine: null,
        line: {
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
      chart.axis("value", {
        grid: null,
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
          formatter: (val) => {
            return +val + "K";
          },
          style:{
            fill:'#A5B8CA'
          }
        },
      });
      chart.tooltip(false);
  
      chart.legend(false);
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
  return <div id="job-number"></div>;
}

export default JobNumber;
