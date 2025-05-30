import RowColumn from "@//components/row";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const IrjPage = () => {
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
        colAlt1={`Pelayanan Rawat Jalan`}
        colAlt2={`Pasien ODC`}
        labelCol1={`Pelayanan Rawat Jalan`}
        labelCol2={`Pasien ODC`}
        imgCol1={`${prefix}/assets/irj.png`}
        imgCol2={`${prefix}/assets/oneday.jpg`}
        urlCol1={url?.rajalA}
        urlCol2={url?.rajalB}
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

export default IrjPage;
