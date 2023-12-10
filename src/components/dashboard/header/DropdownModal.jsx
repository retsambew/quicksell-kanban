import "./DropdownModal.css";
import { useSelector, useDispatch } from "react-redux";
import { setGrouping } from "../../../features/grouping/groupingSlice";
import { setOrdering } from "../../../features/ordering/orderingSlice";

const DropdownModal = () => {
	const grouping = useSelector((state) => state.grouping.value);
	const ordering = useSelector((state) => state.ordering.value);
	const dispatch = useDispatch();

	const setOption = (e) => {
		localStorage.setItem(e.target.id, e.target.value);
		if (e.target.id === "grouping") dispatch(setGrouping(e.target.value));
		else dispatch(setOrdering(e.target.value));
	};

	return (
		<div className="dropdownModal">
			<span>
				<label htmlFor="grouping">Grouping</label>
				<select
					id="grouping"
					value={grouping}
					onChange={(e) => setOption(e)}
				>
					<option value="status">Status</option>
					<option value="user">User</option>
					<option value="priority">Priority</option>
				</select>
			</span>

			<span>
				<label htmlFor="ordering">Ordering</label>
				<select
					id="ordering"
					value={ordering}
					onChange={(e) => setOption(e)}
				>
					<option value="priority">Priority</option>
					<option value="title">Title</option>
				</select>
			</span>
		</div>
	);
};

export default DropdownModal;
