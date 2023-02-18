import React from "react";

const Row = (props) => {
    return (
        <tr>
        <td className="time">{props.time}</td>
        {props.sunday? props.sunday: <td></td>}
        {props.monday? props.monday: <td></td>}
        {props.tuesday? props.tuesday: <td></td>}
        {props.wednesday? props.wednesday: <td></td>}
        {props.thursday? props.thursday: <td></td>}
        {props.friday? props.friday: <td></td>}
        {props.saturday? props.saturday: <td></td>}

    </tr>
    )
}

export default Row