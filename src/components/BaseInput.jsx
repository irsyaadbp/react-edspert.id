import React from "react";

export default function BaseInput({ label, value, onChange }) {
  return (
    <div className="input-group">
      {label ? <label className="label">{label}</label> : null}
      <input value={value} onChange={onChange} className="input" type="text" />
    </div>
  );
}
