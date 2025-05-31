import Link from "next/link";
import React, { useEffect, useState } from "react";
import IconButtonLink from "@/components/iconButton";
import RowColumn from "@//components/row";

const IBSPage = () => {
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
        colAlt1={`Pelayanan Kamar Bedah`}
        colAlt2={`Batal Operasi`}
        labelCol1={`Pelayanan Kamar Bedah`}
        labelCol2={`Batal Operasi`}
        imgCol1={`${prefix}/assets/icon/ibs.png`}
        imgCol2={`${prefix}/assets/icon/batalOperasi.png`}
        urlCol1={url?.ibsA}
        urlCol2={url?.ibsB}
      />
      <IconButtonLink
        imgSrc={`${prefix}/assets/icon/operasiCito.png`}
        alt={`Operasi CITO`}
        label={`Operasi CITO`}
        url={url?.ibsC}
        imgHeight={100}
        imgWidth={100}
        fontWeight={`fs-xl-4`}
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

export default IBSPage;
