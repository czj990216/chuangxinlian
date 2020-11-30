import React, {useEffect, useState } from 'react'

import StatisticalTables from '../components/StatisticalTables'
import FunnelPlot from './FunnelPlot'
import BarChart from './BarChart'
import ColumnarChart from './ColumnarChart'
import RelationshipDiagram from './RelationshipDiagram'
import TalentShow from './TalentShow'


import img_chart_bg from '../assets/images/img_chart_bg.png'

function EnterpriseDevResults() {
  let data = [
    {title:'知识产权总数'},
    {title:'高层人才数量'},
    {title:'企业资质认证数'},
    {title:'上市挂牌数'}
  ]
  const [base,setBase] = useState([])
  const [listing,setListing] = useState({})
  const [financing,setFinancing] = useState([])
  const [intellectual,setIntellectual] = useState([])
  const [qualification,setQualification] = useState([])
  const [manager,setManager] = useState({})
  
  useEffect(() => {
    const handleData = (res) => {
      data[0].number = res.intellectualPropertyNum
      data[1].number = res.managerNum
      data[2].number = res.qualificationNum 
      data[3].number = res.listingNum 
      setBase(JSON.parse(JSON.stringify(data)))
    }
    fetch("/api/chunk/company/developmentInfo")
    .then(r => r.json())
    .then(res => {
      handleData(res.data.base)
      setListing(res.data.listing)
      setFinancing(res.data.financing)
      setIntellectual(res.data.intellectual)
      setQualification(res.data.qualification)
      setManager(res.data.manager)
    })
  },[])
  return (
    <section className='enterpriseDevResults'>
      <div className="left">
        <StatisticalTables data={base} />
  <p className="chart-title">园区高层人才展示</p>
        <div className='chart-bg person-chart' style={{backgroundImage:`url(${img_chart_bg})`}}>
          <TalentShow data={manager} />
        </div>
        <p className="chart-title">企业资质认证数量</p>
        <div className='chart-bg' style={{backgroundImage:`url(${img_chart_bg})`}}>
          <RelationshipDiagram data={qualification} />
        </div>
      </div>
      <div className="right">
        <p className="chart-title">园区上市挂牌数量</p>
        <div className='chart-bg funnel-plot' style={{backgroundImage:`url(${img_chart_bg})`}}>
          <FunnelPlot data={listing} />
        </div>
        <p className="chart-title">园区企业融资数量</p>
        <div className='chart-bg columnar-chart' style={{backgroundImage:`url(${img_chart_bg})`}}>
          <ColumnarChart data={financing} />
        </div>
        <p className="chart-title">园区企业知识产权</p>
        <div className='chart-bg bar-chart' style={{backgroundImage:`url(${img_chart_bg})`}}>
          <BarChart data={intellectual} />
        </div>
      </div>
    </section>
  );
}

export default EnterpriseDevResults