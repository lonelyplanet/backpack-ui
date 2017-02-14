// import moment from "moment";
import humanizeDuration from "humanize-duration";


export const duration = (amount, unit = "milliseconds") => {
  const unitMultipler = {
    milliseconds: 1,
    seconds: 1000,
  };
  const options = {
    round: true,
    units: ["h", "m"],
    delimiter: " ",
    language: "shortEn",
    languages: {
      shortEn: {
        h: "hr",
        m: "min",
      },
    },
  };

  // Library takes time unit as milliseconds so we must convert
  const convertedTime = amount * unitMultipler[unit];
  return humanizeDuration(convertedTime, options);
};
