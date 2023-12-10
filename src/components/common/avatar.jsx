import "./avatar.css";
import { Tooltip } from "react-tippy";

const Avatar = ({ user }) => {
	const userNameInitial = user.name
		.split(" ")
		.map((name) => name.charAt(0))
		.join("")
		.toUpperCase();

	return (
		<Tooltip
			title={user.name}
			position="bottom"
			arrow="true"
			delay="800"
			size="small"
		>
			<div className="userAvatar">
				{/* <img src={user.avatar} alt="avatar" /> */}
				{userNameInitial}
				<div
					className={`userStatus ${
						user.available ? "userOnline" : ""
					}`}
				></div>
			</div>
		</Tooltip>
	);
};

export default Avatar;
