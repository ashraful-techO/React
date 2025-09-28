import React from "react";

export default function Profile({ name, age, isStudent }) {
  return (
    <div>
      <p>
        {name} is {age} year old and{" "}
        <b>{isStudent ? "a student" : "not a student"}</b>
      </p>
    </div>
  );
}
