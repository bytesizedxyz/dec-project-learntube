import React from "react";

const upcase = str => {
  const res = str.split("");
  const firstLetterCap = res[0].toUpperCase();
  res[0] = firstLetterCap;
  res.join();
  return res;
};

const inputField = ({ field, type, value, onChange }) => (
  <>
    <label htmlFor={field}>{upcase(field)}</label>
    <input id={field} type={type} value={value} onChange={onChange} />
  </>
);

export default inputField;
