import { useEffect, useState } from "react";
import { priority, statusIcon } from "../../../constants";
import Avatar from "../../common/avatar";
import Card from "../card/Card";
import "./KanbanBoard.css";
import { BsPlus, BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";

const KanbanBoard = () => {
	const [groupedCards, setGroupedCards] = useState();
	const grouping = useSelector((state) => state.grouping.value);
	const ordering = useSelector((state) => state.ordering.value);
	const tickets = useSelector((state) => state.tickets.value);
	const users = useSelector((state) => state.users.value);

	const arrangeCards = () => {
		const groupedCards = {};

		// -- Grouping Data --
		// Group the cards by the grouping field
		let groupBy = grouping;
		if (grouping === "user") groupBy = "userId";
		tickets.forEach((ticket) => {
			const fieldValue = ticket[groupBy];
			if (!groupedCards[fieldValue]) {
				groupedCards[fieldValue] = [];
			}
			groupedCards[fieldValue].push(ticket);
		});

		// -- Ordering Data --
		// Sort the cards within each group based on the ordering field
		Object.keys(groupedCards).forEach((key) => {
			if (ordering === "priority") {
				groupedCards[key].sort((a, b) => b.priority - a.priority);
			} else if (ordering === "title") {
				groupedCards[key].sort((a, b) =>
					a.title.localeCompare(b.title)
				);
			}
		});

		setGroupedCards(groupedCards);
	};

	useEffect(() => {
		arrangeCards();
	}, [tickets, grouping, ordering]);

	// Find user by id
	const findUserById = (userId) => {
		return users.find((user) => user.id === userId);
	};

	const getHeader = (card) => {
		const grouping = localStorage.getItem("grouping");
		if (grouping === "user") {
			const user = findUserById(card.userId);
			return (
				<>
					<Avatar user={user} />
					{user.name}
				</>
			);
		} else if (grouping === "status") {
			return (
				<>
					{statusIcon[card.status]}
					{card.status}
				</>
			);
		} else if (grouping === "priority") {
			return (
				<>
					{priority[card.priority].icon}
					{priority[card.priority].label}
				</>
			);
		}
	};

	return (
		<div className="kanbanBoard">
			{groupedCards &&
				Object.keys(groupedCards).map((key, index) => (
					<div key={index}>
						<div className="kanbanHeader">
							<span className="kanbanHeaderInfo">
								{getHeader(groupedCards[key][0])}
								<p>{groupedCards[key].length}</p>
							</span>
							<span className="kanbanHeaderOptions">
								<BsPlus />
								<BsThreeDots />
							</span>
						</div>
						{groupedCards[key].map((ticket) => {
							const user = findUserById(ticket.userId);
							return <Card ticket={ticket} user={user} />;
						})}
					</div>
				))}
		</div>
	);
};

export default KanbanBoard;
