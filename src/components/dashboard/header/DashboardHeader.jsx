import { useState } from "react";
import { TbAdjustmentsFilled, TbChevronDown } from "react-icons/tb";
import "./DashboardHeader.css";
import DropdownModal from "./DropdownModal";

const DashboardHeader = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<div className="dashboardHeader">
			<div
				className="dropdown"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				<TbAdjustmentsFilled className="adjustIcon" />
				Display
				<TbChevronDown
					className={`arrowIcon ${showDropdown ? "rotateArrow" : ""}`}
				/>
			</div>
			{showDropdown && <DropdownModal />}
		</div>
	);
};

export default DashboardHeader;
