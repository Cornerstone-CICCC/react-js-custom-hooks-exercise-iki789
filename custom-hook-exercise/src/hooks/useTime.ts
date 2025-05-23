import { useState, useEffect } from "react";

const getTime = (type: "hour" | "day") => {
  const now = new Date();
  if (type === "hour") {
    return now.getHours().toString();
  } else if (type === "day") {
    return now.toLocaleDateString(undefined, { weekday: "long" });
  }
  return "";
};

const useTime = <T extends "hour" | "day">(type: T): string => {
  const [timeValue, setTimeValue] = useState<string>(getTime(type));

  return timeValue;
};

export default useTime;
