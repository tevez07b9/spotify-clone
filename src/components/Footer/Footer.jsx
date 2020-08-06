import React from "react";
import "./Footer.css";

import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";

import PlaylistPlaySharpIcon from "@material-ui/icons/PlaylistPlaySharp";
import VolumeDownSharpIcon from "@material-ui/icons/VolumeDownSharp";

function Footer() {
	return (
		<div className="footer">
			<div className="footer_left">
				<img
					src="https://i.scdn.co/image/ab67616d0000485145190a074bef3e8ce868b60c"
					className="footer_albumLogo"
					alt=""
				/>
				<div className="footer_songInfo">
					<h4>No song playing...</h4>
					<p>User</p>
				</div>
			</div>
			<div className="footer_center">
				<ShuffleIcon className="footer_green" />
				<SkipPreviousIcon className="footer_icon" />
				<PlayCircleOutlineIcon className="footer_icon" fontSize="large" />
				<SkipNextIcon className="footer_icon" />
				<RepeatIcon className="footer_green" />
			</div>
			<div className="footer_right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlaySharpIcon />
					</Grid>
					<Grid item>
						<VolumeDownSharpIcon />
					</Grid>
					<Grid item xs>
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
