import Link from "next/link";
import React, { useEffect, useState } from "react";
import IconButtonLink from "@/components/iconButton";

const RWIPage = () => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(JSON.parse(localStorage.getItem("rs") || "null"));
  }, []);
  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";
  return (
    <div className="container" style={{ marginTop: 100 }}>
      <IconButtonLink
        imgSrc={`${prefix}/assets/rwi.jpg`}
        alt={`Pelayanan Rawat Inap`}
        label={`Pelayanan Rawat Inap`}
        url={url?.ranap}
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

export default RWIPage;
