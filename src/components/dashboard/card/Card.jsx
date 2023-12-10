import Avatar from "../../common/avatar";
import { Tooltip } from "react-tippy";
import { tippyOptions, priority, statusIcon } from "../../../constants";
import "./Card.css";

const Card = ({ ticket, user }) => {
	return (
		<div className="cardContainer">
			<div className="cardHeader">
				<div className="cardId">{ticket.id}</div>
				<Avatar user={user} />
			</div>

			<div className="cardBody">
				<Tooltip title={ticket.status} {...tippyOptions}>
					<div className="cardStatusIcon">
						{statusIcon[ticket.status]}
					</div>
				</Tooltip>
				<p>{ticket.title}</p>
			</div>

			<div className="cardFooter">
				<Tooltip
					title={priority[ticket.priority].label}
					{...tippyOptions}
				>
					<div className="cardTag priority">
						{priority[ticket.priority].icon}
					</div>
				</Tooltip>
				{ticket.tag.map((tag, index) => {
					return (
						<div className="cardTag" key={index}>
							<span></span>
							{tag}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Card;
