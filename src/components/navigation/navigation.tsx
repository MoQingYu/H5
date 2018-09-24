import * as React from "react";
import { Component } from "react";
import { Menu, Icon } from "antd";
import { navigation } from "../../config/navigation";
import { Link } from "react-router-dom";

const { Item } = Menu;

interface NavigationProps {
	location: any;
};
interface NavigationState { };
/* 导航栏 */
export class Navigation extends Component<NavigationProps, NavigationState>{
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const { location } = this.props;
		console.log(location.pathname);
		return <Menu mode="inline" theme="dark"
			selectedKeys={[location.pathname]}>
			{
				navigation.map(d => {
					const content = <Link to={d.path}>
						<Icon type={d.icon} theme="outlined" />
						<span>{d.name}</span>
					</Link>
					return <Item key={d.path}>{content}</Item >
				})
			}
		</Menu>;
	}
}
