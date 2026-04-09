import React from "react";

const images = [
  require("../assets/img/100-SMEs-thumb.jpg"),
  require("../assets/img/13133149_984430948343938_7711929380306170681_n.jpg"),
  require("../assets/img/13554A43-AECF-43B4-85C7-D198DE8A788B-HOLO-SET.jpg"),
  require("../assets/img/1602850674image-10.png"),
  require("../assets/img/33.png"),
  require("../assets/img/34.png"),
  require("../assets/img/605153FD-CA67-4BF8-9D52-5DA8AD20EE13.jpg"),
  require("../assets/img/74EF949A-83D0-46BB-A417-634E7FBF2A77.jpg"),
  require("../assets/img/81-X87L5C-L._AC_UL320_.jpg"),
  require("../assets/img/81KDGks1CL._AC_UL320_.jpg"),
  require("../assets/img/81LbqREZonL._SX679_.jpg"),
  require("../assets/img/81O09B1dsL._SX679_.jpg"),
  require("../assets/img/81U2KBekwlL._SX679_.jpg"),
  require("../assets/img/81hNV4EVsEL._AC_UL320_.jpg"),
  require("../assets/img/81za5cIwc9L._AC_UL320_.jpg"),
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery Image ${index + 1}`} className="img responsive col-md-3 col-sm-4 col-xs-6" style={{ height:350, padding:10, borderRadius:20,}}/>
        ))}
      </div>
    </div>
  );
};

export default Gallery;