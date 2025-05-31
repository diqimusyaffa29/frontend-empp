import RowColumn from "@/components/row";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const IgdPage = () => {
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
        colAlt1={`Pelayanan IGD`}
        colAlt2={`Penolakan Pasien`}
        labelCol1={`Pelayanan IGD`}
        labelCol2={`Penolakan Pasien`}
        imgCol1={`${prefix}/assets/icon/igd.png`}
        imgCol2={`${prefix}/assets/icon/penolakanPasien.png`}
        urlCol1={url?.igdA}
        urlCol2={url?.igdB}
      />
      <RowColumn
        imgH1={100}
        imgH2={100}
        imgW1={100}
        imgW2={100}
        colAlt1={`Pasien Observasi Lebih dari 1 Shift`}
        colAlt2={`Pasien di Rujuk`}
        labelCol1={`Pasien Observasi Lebih dari 1 Shift`}
        labelCol2={`Pasien di Rujuk`}
        imgCol1={`${prefix}/assets/icon/pasienObservasi.png`}
        imgCol2={`${prefix}/assets/icon/pasienRujuk.png`}
        urlCol1={url?.igdC}
        urlCol2={url?.igdD}
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

export default IgdPage;
