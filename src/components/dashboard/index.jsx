import { useEffect } from "react";
import DashboardHeader from "./header/DashboardHeader";
import KanbanBoard from "./kanbanBoard/KanbanBoard";
import { useDispatch } from "react-redux";
import { setTickets } from "../../features/tickets/ticketSlice";
import { setUsers } from "../../features/users/userSlice";

const Dashboard = () => {
	const dispatch = useDispatch();

	// Fetch data from API
	const getDashboardData = async () => {
		const response = await fetch(
			"https://api.quicksell.co/v1/internal/frontend-assignment"
		);
		const data = await response.json();
		dispatch(setUsers(data.users));
		dispatch(setTickets(data.tickets));
	};

	// Fetch data on component mount
	useEffect(() => {
		getDashboardData();
	}, []);

	return (
		<div>
			<DashboardHeader />
			<KanbanBoard />
		</div>
	);
};

export default Dashboard;
