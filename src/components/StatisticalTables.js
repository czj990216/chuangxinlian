import React from 'react'

import img_tables_bg from '../assets/images/img_tables_bg.png'

function  StatisticalTables ({ data }) {
  // console.log(data)
  const LiBlock = () => data.map((item) => {
    return (
      <li key={item.title}>
        <p>{item.title}</p>
        <div className="value">
          <h4>{item.number}</h4>
          万
        </div>
      </li>
    )
  })
  return (
    <section className="statistical-tables" style={{backgroundImage:`url(${img_tables_bg})`}}>
      <ul>
        <LiBlock />
      </ul>
    </section>
  )
}
export default StatisticalTables