import React from "react";

const styles = {
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const Loader = () => (
  <div style={styles.loader}>
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
