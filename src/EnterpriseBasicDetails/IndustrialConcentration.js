import React, { useEffect } from "react";
import { Chart } from "@antv/g2";

function IndustrialConcentration({ data }) {
	// console.log(data);
	useEffect(()=>{
		if(data.length) {
			// let values = data.map((item) => {
			// 	return item.value
			// })
			// let total = values.reduce((a,b) => {
			// 	return a + b
			// })
			// let industryData = data
			// industryData.map((item) => {
			// 	item.percent = item.value/total
			// 	return industryData
			// })
			let industryData = [
				{ name: '事例一', value: 1000, percent: 0.4 },
				{ name: '事例二', value: 21, percent: 0.21 },
				{ name: '事例三', value: 17, percent: 0.17 },
				{ name: '事例四', value: 13, percent: 0.13 },
				{ name: '事例五', value: 9, percent: 0.09 },
				{ name: '事例1', value: 40, percent: 0.4 },
				{ name: '事例2', value: 21, percent: 0.21 },
				{ name: '事例3', value: 17, percent: 0.17 },
				{ name: '事例4', value: 17, percent: 0.17 },
				{ name: '事例5', value: 17, percent: 0.17 },
			];
			const chart = new Chart({
				container: 'industrial-concentration',
				autoFit: true,
				padding: [0, 330, 0, 50]
			});
			
			chart.coordinate('theta', { 
				radius: 0.9,
				offsetX:-30
			});
	
			chart.axis({
				offsetX:-30
			})
	
			
			chart.legend('name', {
				position: 'right', 
				offsetX:-100,
				flipPage:false,
				width:200,
				itemHeight:30,
				itemSpacing:20,
				marker: {
					symbol: 'square'
				}
			});
			
			chart.data(industryData);
			chart.tooltip(false);
	
			chart
				.interval()
				.state({
					active:{
						style:element =>{
							const shape = element.shape;
						}
					}
				})
				.position('percent')
				.color('name')
				.adjust('stack');
			chart.theme({"colors10":["#4579FF","#7649FF","#E21FEA","#FF4980","#FFC59B","#F86D53","#F5FF6D","#41BD7C","#49E8FF","#F2A2C5"],"colors20":["#4579FF","#7649FF","#E21FEA","#FF4980","#FFC59B","#F86D53","#F5FF6D","#41BD7C","#49E8FF","#F2A2C5","#FFC328","#A0DC2C","#946DFF","#626681","#EB4185","#CD8150","#36BCCB","#327039","#803488","#83BC99"]})	
			chart.render();
		}
	},[data])
  return <div id="industrial-concentration"></div>;
}

export default IndustrialConcentration;
