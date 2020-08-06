import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Body from "../Body/Body";

function Player() {
	return (
		<div className="player">
			<div className="player__body">
				<Sidebar />
				<Body />
			</div>

			{/* Footer */}
		</div>
	);
}

export default Player;
