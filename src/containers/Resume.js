import { useState } from 'react';
import Loader from "react-loader-spinner";
import { pdfjs, Document, Page } from 'react-pdf';
import './Resume.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
  
  const [numPages, setNumPages] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  const onDocumentLoadSuccess = ({numPages}) => {
    setNumPages(numPages);
  };

  const loader = () => (
    <Loader
      className="loader"
      type="TailSpin"
      color="#FFFFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );

  return (
    <div>
      <Document
        renderMode="svg"
        className="res-doc"
        file="/docs/myresume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        loading={loader}
        onLoadError={() => {console.log("Couldn't load pdf :(")}}
        onSourceError={() => <h1>404 :(</h1>}
        >
        <Page 
          scale={0.95}
          className="res-page"
          pageNumber={1}
          loading={loader}/>
      </Document>
      <p className="page-no">Page {pageNum} of {numPages}</p>
    </div>
  );
};

export default Resume;