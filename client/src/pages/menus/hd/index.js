import Link from "next/link";
import React, { useEffect, useState } from "react";
import IconButtonLink from "@/components/iconButton";
import RowColumn from "@//components/row";

const HemodialisaPage = () => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(JSON.parse(localStorage.getItem("rs") || "null"));
  }, []);

  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";
  return (
    <div className="container" style={{ marginTop: 100 }}>
      <RowColumn
        imgH1={100}
        imgH2={100}
        imgW1={100}
        imgW2={100}
        colAlt1={`Pelayanan Hemodialisa`}
        colAlt2={`Hemodialisa CITO`}
        labelCol1={`Pelayanan Hemodialisa`}
        labelCol2={`Hemodialisa CITO`}
        imgCol1={`${prefix}/assets/icon/hemo.png`}
        imgCol2={`${prefix}/assets/icon/hdCito.png`}
        urlCol1={url?.hdA}
        urlCol2={url?.hdB}
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

export default HemodialisaPage;
