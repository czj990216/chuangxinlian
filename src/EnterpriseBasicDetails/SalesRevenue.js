import React, { useState, useEffect } from "react";
// 引入 ECharts 主模块
import echarts from "echarts";

function SalesRevenue() {
  const [as] = useState(null);
  useEffect(() => {
    let myChart = echarts.init(document.getElementById("sales-revenue"));
    // 绘制图表
    let data = [
      [32323, 70],
      [1250, 77.4],
      [2500, 68],
      [5000, 74.7],
      [28599, 75],
      [29476, 77.1],
      [31476, 75.4],
      [28666, 78.1],
      [44444, 57.7],
      [29550, 79.1],
      [44444, 67.9],
      [44444, 72],
      [24021, 75.4],
      [50000, 76.8],
      [33333, 70.8],
      [19349, 69.6],
      [44444, 67.3],
      [26424, 75.7],
      [37062, 75.4],
    ]
    let xData =  ['','E','D','C','B','A','S','S+','SS','SS+','SSS']
    let option = {
      legend: {
        right: 10,
        textStyle:{
          color:'#A5B8CA',
        }
      },
      xAxis: {
        splitLine: false,
        name:'成熟度',
        nameTextStyle:{
          color:'#A5B8CA'
        },
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          // show: true,
          formatter: function(params) {
            return xData[params/5000]
          }
        },
        splitNumber: xData.length,
        axisLine:{
          lineStyle:{
            color:'#A5B8CA',
          }
        }
      },
      yAxis: {
        splitLine: false,
        scale: true,
        name: '成长性',
        nameTextStyle:{
          color:'#A5B8CA',
          align:'right',
        },
        axisLine:{
          lineStyle:{
            color:'#A5B8CA',
          }
        }
      },
      tooltip: {
        axisPointer: {
          type: "cross",
          axis: "auto",
          label: {
            show: false,
          },
        },
        borderWidth: 1,
        padding: 0,
        borderColor: "rgba(84, 151, 255, 0.3)",
        backgroundColor: "#0C2A8E",
        formatter: function () {
          var res =
            '<div style="text-align: left;padding: 15px;background: #0C2A8E;box-shadow: inset 0px 0px 12px 0.5px rgba(75, 167, 255, 0.313729);"><p>公司名称：<span style="color: #4FBDFF;">成都亚马逊科技有限公司</span></p>' +
            '<p>本年度销售额度：<span style="color: #4FBDFF;">324,342,344.00元</span></p>' +
            '<p>上年度销售额度：<span style="color: #4FBDFF;">324,342,344.00元</span></p>' +
            '<p>研发投入：<span style="color: #4FBDFF;">342,344.00元</span></p>' +
            '<p>缴纳税金：<span style="color: #4FBDFF;">342,344.00元</span></p>' +
            "</div>";
          return res;
        },
      },
      grid: {
        top: "30",
        left: "40",
        right: "50",
        bottom: "30",
        width:'auto',
        height: 'auto'
      },
      series: [
        {
          data: data,
          type: "scatter",
          symbolSize: 20,
          itemStyle: {
            color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
              {
                offset: 0,
                color: "#4FBDFF",
              },
              {
                offset: 1,
                color: "#4FBDFF",
              },
            ]),
          },
        }
      ],
    };
    myChart.setOption(option);
    window.onresize = function () {
      myChart.resize()
    }
    myChart.dispatchAction({
      type: "showTip",
      seriesIndex: 0,
      dataIndex: as,
    });
    setTimeout(function () {
      myChart.dispatchAction({
        type: "hideTip",
      });
    }, 3000);
  });
  return (
    <div>
      {/* <input
        style={{
          position: "fixed",
          right: "100px",
          top: "100px",
          width: "100px",
          height: "100px",
        }}
        onChange={(e) => {
          setAs(e.target.value);
        }}
      /> */}
      <div id="sales-revenue"></div>
    </div>
  );
}

export default SalesRevenue;
