import React from "react"
import { Link } from "react-router-dom"

import bg from "../assets/images/img_headerbg.png"
import { ArrowIcon, HeaderTitle, HeaderSubTitle } from '../components'

function Header({current, showMenu, setCurrent, setMenuShow}) {
	const menuMap = [{
		title: "园区企业发展成果",
		link: "/"
	}, {
		title: "园区企业基本情况",
		link: "/basic"
	}]

	return (
		<header style={{ backgroundImage: `url(${bg})` }}>
			<div><HeaderTitle /></div>
			<div className="sub-title"><HeaderSubTitle /></div>
			<div className="tab" onClick={() => setMenuShow(!showMenu)} >
				<span>{current}</span>
				<ArrowIcon listStatus={showMenu} />
			</div>
			{
				showMenu &&
				<div className="list">
					{
						menuMap.map(menu => (
							<Link to={menu.link} key={menu.title} onClick={() => setCurrent(menu.title)} className={current === menu.title ? "active" : ""}>
								{menu.title}
							</Link>
						))
					}
				</div>
			}
		</header>
	)
}

export default Header

