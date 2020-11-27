import React, { useEffect } from "react";
import { Chart } from "@antv/g2";

function FunnelPlot({data}) {
  useEffect(() => {
    if(data.sh !== undefined){
      let total = data.location + data.oversea + data.sh + data.three
      let listingData = [
        { action: "新三板", pv: 40 },
        { action: "地方版", pv: 30 },
        { action: "深/泸主板", pv: 20 },
        { action: "海外版", pv: 10 },
      ];
      listingData[0].value = data.three/total + '%'
      listingData[1].value = data.location/total + '%'
      listingData[2].value = data.sh/total + '%'
      listingData[3].value = data.oversea/total + '%'
      const chart = new Chart({
        container: "funnel-plot",
        autoFit: true,
        appendPadding: [20, 180, 20, 50],
      });
      chart.data(listingData);
      chart.axis(false);
      chart.coordinate().transpose();
      chart.tooltip(false);
      chart.legend({
        position: "right",
        itemHeight: 25,
        handler: {
          size: 50,
        },
        marker: {
          style: {
            r: 5,
          },
        },
        reversed: true,
        itemName: {
          style: {
            fill: "#A5B8CA"
          }
        }
      });
      chart
        .interval()
        .adjust("symmetric")
        .position("action*pv*value")
        .shape("pyramid")
        .color("action", ["#4FBDFF", "#419CDC", "#337BB7", "#265B92"])
        .style({
           lineWidth: 2,
           stroke: '#0E2470'
        })
        .label(
          "action*pv*value",
          (action,pv,value) => {
            return {
              content: `${value}`,
            };
          },
          {
            line: {
              style: {
                lineWidth: 0.5,
                stroke: "#4FBDFF",
              },
            },
            offset: 35,
            labelLine: {
              style: {
                lineWidth: 10,
                stroke: "#90D5FF",
              },
            },
            style: {
              fill: "#A5B8CA"
            }
          }
        )
        .animate({
          appear: {
            animation: "fade-in",
          },
          update: {
            annotation: "fade-in",
          },
        });
  
      chart.interaction("element-active");
  
      chart.render();
    }
  },[data]);
  return <div id="funnel-plot" style={{ height: 100 + "%" }}></div>;
}
export default FunnelPlot;
