import React,{useState} from "react";
import "../styles/styles.css";
import studentsData from "../DataFile/studentsData";

const TopperList = () => {
    const [toppers] = useState(studentsData);
    return (
        <div className="achievement-container">
            <div className="scrolling-wrapper">
                <div className="topper-list">
                {[...toppers, ...toppers].map((student, index) => (
                        <div className="topper-card" key={index}>
                            <img src={student.image} alt={student.name} className="topper-image" />
                            <div className="topper-details">
                                <h3>{student.name}</h3>
                                <p><strong>Year:</strong> {student.year}</p>
                                <p><strong>Class:</strong> {student.class ? student.class : "10th/12th"}</p>
                                {student.stream && <p><strong>Stream:</strong> {student.stream}</p>}
                                <p><strong>Percentage:</strong> {student.percentage}%</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopperList;