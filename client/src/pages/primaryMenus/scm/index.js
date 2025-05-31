import RowColumn from "@/components/row";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const caseManagerPage = () => {
  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(JSON.parse(localStorage.getItem("rs") || "null"));
  }, []);

  return (
    <div className="container" style={{ marginTop: 100 }}>
      <RowColumn
        imgH1={100}
        imgH2={100}
        imgW1={100}
        imgW2={100}
        colAlt1={`Form A`}
        colAlt2={`Form B`}
        labelCol1={`Form A`}
        labelCol2={`Form B`}
        imgCol1={`${prefix}/assets/icon/formA.png`}
        imgCol2={`${prefix}/assets/icon/formB.png`}
        urlCol1={url?.formA}
        urlCol2={url?.formB}
      />
      <RowColumn
        imgH1={100}
        imgH2={100}
        imgW1={100}
        imgW2={100}
        colAlt1={`Form P3`}
        colAlt2={`Form Checklist P3`}
        labelCol1={`Form P3`}
        labelCol2={`Form Checklist P3`}
        imgCol1={`${prefix}/assets/icon/p3.png`}
        imgCol2={`${prefix}/assets/icon/checklist.png`}
        urlCol1={url?.formP3}
        urlCol2={url?.ceklisFormP3}
      />
      <Link href={`/`}>
        <button
          className="btn btn-primary"
          type="submit"
          style={{ float: "right" }}
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default caseManagerPage;
