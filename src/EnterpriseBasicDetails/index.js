import React, { useEffect,useState } from 'react'

import { TableTitle } from '../components'
import StatisticalTables from '../components/StatisticalTables'
import CompanyNumber from './CompanyNumber'
import IndustrialConcentration from './IndustrialConcentration'
import JobNumber from './JobNumber'
import SalesRevenue from './SalesRevenue'
import SalesRevenueList from './SalesRevenueList'

import bg from "../assets/images/table_bg.png"

function EnterpriseBasicDetails() {
  let data = [
    {title:'总企业数'},
    {title:'创造就业岗位数'},
    {title:'累计销售额度'},
    {title:'累计研发投入'},
    {title:'高成熟企业'}
  ]
  
  const [base,setBase] = useState([])
  const [joinList,setJoinlist] = useState([])
  const [industry,setIndustry] = useState([])
  const [employee,setEmployee] = useState([])
  
  useEffect(() => {
    const handleData = (res) => {
      data[0].number = res.enterpriseNum
      data[1].number = res.workNum
      data[2].number = res.totalIncome
      data[3].number = res.rd
      data[4].number = res.highMaturityNum
      setBase(JSON.parse(JSON.stringify(data)))
    }
    fetch("/api/chunk/company/baseInfo")
    .then(r => r.json())
    .then(res => {
      handleData(res.data.base)
      setJoinlist(res.data.joinList)
      setIndustry(res.data.industry)
      setEmployee(res.data.employee)
    })
    // eslint-disable-next-line
  },[])
  return (
    <section className="enterprise-basic-details"> {/* TODO className */}
      <div className="left">
        <StatisticalTables data={base} />
        <TableTitle title={'园区企业销售收入'} />
        <div className='sales' style={{ backgroundImage: `url(${bg})` }}>
          <SalesRevenueList />
          <div className="sale">
            <SalesRevenue />
          </div>
        </div>
      </div>
      <div className="right">
        <TableTitle title={'园区入驻企业数量'} />
        <div className="company" style={{ backgroundImage: `url(${bg})` }}>
          <CompanyNumber data={joinList} />
        </div>
        <TableTitle title={'垂直产业集中度'} />
        <div className="industrial" style={{ backgroundImage: `url(${bg})` }}>
          <IndustrialConcentration data={industry} />
        </div>
        <TableTitle title={'创造就业岗位数量'} />
        <div className="job" style={{ backgroundImage: `url(${bg})` }}>
          <JobNumber data={employee} />
        </div>
      </div>
    </section>
  );
}

export default EnterpriseBasicDetails