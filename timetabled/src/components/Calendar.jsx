import React from "react";
import Row from "./Row";
import Event
 from "./Event";
const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>         
            </thead>
            <tbody>
                <Row time="8 am"/>
                <Row time="9 am" sunday={<Event event="Yoga" color ='green'/>}/>
                <Row time="10 am" tuesday={<Event event="standup" color ='pink'/>} thursday={<Event event="standup" color ='pink'/>}/>
                <Row time="11 am"/>
                <Row time="12 pm" monday={<Event event="Gym" color ='green'/>} wednesday={<Event event="Gym" color ='green'/>} friday={<Event event="Gym" color ='green'/>}/>
                <Row time="1 pm"/>
                <Row time="2 pm" tuesday={<Event event="sprint retro" color ='pink'/>}/>
                <Row time="3 pm"/>
                <Row time="4 pm"/>
                <Row time="5 pm"/>
            </tbody>
            </table>
        </div>
    )
}

export default Calendar
