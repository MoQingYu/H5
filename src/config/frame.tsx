import * as React from 'react';
import { Component } from "react";
import { Layout } from "antd";
import VWHeader from "../components/header/header";
import '../public/common.less';
import { Navigation } from "../components/navigation/navigation";

const { Header, Content, Sider } = Layout;

interface HistoryModal {
	location: any;
}

interface FrameProps {
	history: HistoryModal;
	children: React.ReactNode;
}
export function Frame (props: FrameProps) {
	const { history:{ location } } = props;
	return <Layout className="vw-layout" style={{ minHeight: "100vh" }}>
		<Header> 
			<VWHeader /> 
		</Header>
		<Layout>
			<Sider>
				<Navigation location={location} />
			</Sider>
			<Content>
				{props.children}
			</Content>
		</Layout>
	</Layout>
}