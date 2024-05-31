import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import "./TodoIcon.css";

const iconType = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color} />,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color} />,
}

function TodoIcon({ type, color }) {
    return (
        <span 
        className={`Icon-container Icon-container-${type}`}
        >
            {iconType[type](color)}
        </span>
    )
}

export { TodoIcon };