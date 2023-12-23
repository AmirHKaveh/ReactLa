import React,{ useState, useEffect } from "react";


function ImagePreview ({file}) {

console.log(file)





  return (
    <>
     

      <div className="col-4">
        {fileDataURL ? (
          <p className="img-preview-wrapper">
            {<img src={fileDataURL} alt="preview" width="80" height="80" />}
          </p>
        ) : (
          <img src={noImage} alt="preview" width="80" height="80" />
        )}
      </div>
    </>
  );
};

export default ImagePreview;
