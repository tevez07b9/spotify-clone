import React from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";

function Sidebar() {
	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt="Spotify"
			/>
			<SidebarOption title="Home" Icon={HomeOutlinedIcon} />
			<SidebarOption title="Search" Icon={SearchOutlinedIcon} />
			<SidebarOption title="Your Library" Icon={LibraryMusicOutlinedIcon} />

			<br />
			<strong className="sidebar__title">Playlist</strong>
			<hr />

			<SidebarOption title="Hip Hop" />
			<SidebarOption title="Rock" />
			<SidebarOption title="R&B" />
		</div>
	);
}

export default Sidebar;
