import RowColumn from "@/components/row";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function OncallPage() {
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
        colAlt1={`Form Pengajuan Bank Perawat`}
        colAlt2={`Daftar Pengajuan`}
        labelCol1={`Form Pengajuan Bank Perawat`}
        labelCol2={`Daftar Pengajuan`}
        imgCol1={`${prefix}/assets/laporanmod.png`}
        imgCol2={`${prefix}/assets/laporanmod.png`}
        urlCol1={url?.formBankPerawat}
        urlCol2={url?.hasilBankPerawat}
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
}
