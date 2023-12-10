// Icons
import { BsExclamationSquareFill, BsThreeDots } from "react-icons/bs";
import {
    MdOutlineSignalCellularAlt,
    MdOutlineSignalCellularAlt1Bar,
    MdOutlineSignalCellularAlt2Bar,
} from "react-icons/md";
import {
    TbCircle,
    TbCircleCheckFilled,
    TbCircleDashed,
    TbCircleHalf2,
    TbCircleXFilled,
} from "react-icons/tb";



export const tippyOptions = {
    position: "bottom",
    arrow: "true",
    delay: 300,
    size: "small",
};

export const priority = [
    { level: 0, label: "No Priority", icon: <BsThreeDots /> },
    {
        level: 1,
        label: "Low Priority",
        icon: <MdOutlineSignalCellularAlt1Bar />,
    },
    {
        level: 2,
        label: "Medium Priority",
        icon: <MdOutlineSignalCellularAlt2Bar />,
    },
    {
        level: 3,
        label: "High Priority",
        icon: <MdOutlineSignalCellularAlt />,
    },
    { level: 4, label: "Urgent", icon: <BsExclamationSquareFill style={{ fontSize: "0.9rem" }} /> },
];

export const statusIcon = {
    "Backlog": <TbCircleDashed />,
    "Todo": <TbCircle />,
    "In progress": <TbCircleHalf2 style={{ color: "#f1cb4f" }} />,
    "Done": <TbCircleCheckFilled style={{ color: "#5f6bd2" }} />,
    "Canceled": <TbCircleXFilled />,
};
