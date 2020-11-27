import React, { useEffect } from "react";
import { Chart } from "@antv/g2";
import DataSet from '@antv/data-set';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.less";
import "swiper/components/navigation/navigation.less";
import "swiper/components/pagination/pagination.less";
import "swiper/components/scrollbar/scrollbar.less";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

import img_line from '../assets/images/img_line.png'

function RelationshipDiagram({data}) {
  useEffect(() => {
    if(data.length) {
      const { DataView } = DataSet;
      let qualificationData = {
        name: "root"
      }
      qualificationData.children = data
      // let qualificationData = {
      //   name: "root",
      //   children: [
      //     { name: '分类 1', value: 560 },
      //     { name: '分类 2', value: 500 },
      //     { name: '分类 3', value: 150 },
      //     { name: '分类 4', value: 140 },
      //     { name: '分类 5', value: 115 },
      //     { name: '分类 6', value: 95 },
      //     { name: '分类 7', value: 90 },
      //     { name: '分类 8', value: 75 },
      //     { name: '分类 9', value: 98 },
      //     { name: '分类 10', value: 60 },
      //     { name: '分类 11', value: 45 },
      //     { name: '分类 12', value: 40 },
      //     { name: '分类 13', value: 40 },
      //     { name: '分类 14', value: 35 },
      //     { name: '分类 15', value: 40 },
      //     { name: '分类 16', value: 40 },
      //     { name: '分类 17', value: 40 },
      //     { name: '分类 18', value: 30 },
      //     { name: '分类 19', value: 28 },
      //     { name: '分类 20', value: 16 },
      //   ],
      // };
      const dv = new DataView();
      dv.source(qualificationData, {
        type: "hierarchy",
      })
      .transform({
        field: "value",
        type: "hierarchy.treemap",
        tile: "treemapBinary",
        as: ["y", "x"],
      });

      // 将 DataSet 处理后的结果转换为 G2 接受的数据
      const nodes = [];
      for (const node of dv.getAllNodes()) {
        if (node.data.name === "root") {
          continue;
        }
        const eachNode = {
          name: node.data.name,
          x: node.x,
          y: node.y,
          value: node.data.value,
        };

        nodes.push(eachNode);
      }
      const chart = new Chart({
        container: "relationship-diagram",
        autoFit: true,
        height: 500
      });
      chart.data(nodes);
      chart.scale({
        x: {
          nice: true,
        },
        y: {
          nice: true,
        },
      });

      chart.axis(false);
      chart.legend(false);
      chart.tooltip(false);
      chart
        .polygon()
        .position("x*y")
        .color("name")
        .tooltip(false)
        .state({
					active:{
						style:element =>{
							const shape = element.shape;
						}
					}
				})
        .label("name", {
          offset: 0,
          style: {
            textBaseline: "middle",
          },
          content: (obj) => {
            if (obj.name !== "root") {
              return obj.name
            }
          },
        });
      chart.interaction("element-active");
      chart.theme({"colors10":["#3378B0","#4B36BB","#8B1AA4","#9E3975","#9D807E","#2B7965","#238D77","#956D9D","#314841","#5B5135"],"colors20":["#3378B0","#4B36BB","#8B1AA4","#9E3975","#9D807E","#2B7965","#238D77","#956D9D","#314841","#5B5135","#3580C6","#45A192","#456AAA","#672F41","#71778C","#004988","#FFCF9D","#CCDC8A","#8D00A1","#1CC25E"]});
      chart.render();
    }
  }, [data]);
  let bannerData = data
  // let bannerData = [
  //   {id:1, value:'23万',name:"高新技术企业"},
  //   {id:2, value:'23万',name:"国家、省级自然科学奖、技术发明奖、科技进步奖"},
  //   {id:3, value:'23万',name:"科技进步奖"},
  //   {id:4, value:'23万',name:"高新技术企业"},
  //   {id:4, value:'23万',name:"高新技术企业"},
  //   {id:4, value:'23万',name:"高新技术企业"},
  //   {id:4, value:'23万',name:"高新技术企业"},
  //   {id:4, value:'23万',name:"高新技术企业"},
  //   {id:4, value:'23万',name:"高新技术企业"},
  //   {id:4, value:'23万',name:"高新技术企业"},
  //   {id:4, value:'23万',name:"高新技术企业"},
  //   {id:4, value:'23万',name:"高新技术企业"},
  //   {id:4, value:'23万',name:"高新技术企业"},
  //   {id:4, value:'23万',name:"高新技术企业"},
  // ]
  return (
    <div className="relationship-diagram">
      <div className="chart" id="relationship-diagram"></div>
      <img className='line' src={img_line} alt='line' />
      
      <div  className="sales-revenue-list">
        <div className="title">
          <span className="company-name">数量</span>
          <span className="sale-price">奖项</span>
        </div>
        <Swiper
        key={bannerData.length}
        loop={false}
        direction={"vertical"}
        slidesPerView={5}
        autoplay={{delay: 1000, disableOnInteraction: false}}
      >
        {
          bannerData.map((item,index) => {
            return (<SwiperSlide key={index}>
              <span>{item.value}</span>
              <span className="company-name">{item.name}</span>
             </SwiperSlide>)
          })
        }
      </Swiper>
      </div>
    </div>
  );
}
export default RelationshipDiagram;
