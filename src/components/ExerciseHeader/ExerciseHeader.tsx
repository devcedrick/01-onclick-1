import React from "react";
import "./ExerciseHeader.css";

interface ExerciseHeaderProps {
  title: string;
  description: string;
}

const ExerciseHeader = ({ title, description }: ExerciseHeaderProps) => {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
    </div>
  );
};

export default ExerciseHeader;
