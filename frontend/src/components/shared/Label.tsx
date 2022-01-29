import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const Label = (props: IProps) => {
  return (
    <p
      style={{
        marginTop: "auto",
        marginBottom: "auto",
        fontWeight: "lighter",
        color: "gray",
      }}
    >
      {props.children}
    </p>
  );
};
