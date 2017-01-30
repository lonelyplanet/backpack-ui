import React from "react";
import radium from "radium";

const styles = {
  container: {
    display: "flex",
    border: "1px solid red",
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    border: "1px solid blue",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: "#3b444f",
    backgroundPosition: "50%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url('https://lonelyplanetstatic.imgix.net/copilot%2Fimages%2FYXJ0YW5kY3VsdHVyZS5qcGdTYXQgRGVjIDE3IDIwMTYgMjE6MDA6MDUgR01UKzAwMDAgKFVUQyk%3D.jpg?q=60&sharp=10&fit=crop&w=110')",
  },
  content: {
    border: "1px solid green",
    flex: 2,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};
const ThumbnailListItem = () => (
  <div style={styles.container}>
    <div style={styles.imageContainer} className="ThumbnailImage" >
      <div style={styles.image}>
        <div className="TextBubble">42 min</div>
      </div>
    </div>
    <div className="ContentBody" style={styles.content}>
      <div className="Text">
        <div className="Description">S.02  •  E.01</div>
        <div>The shop</div>
      </div>
      <div className="DescriptionIcon">
        <span>Icon goes here</span>
      </div>
    </div>
  </div>
);

export default radium(ThumbnailListItem);
