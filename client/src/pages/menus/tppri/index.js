import Link from "next/link";
import React, { useEffect, useState } from "react";
import IconButtonLink from "@/components/iconButton";

const TppriPage = () => {
  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(JSON.parse(localStorage.getItem("rs") || "null"));
  }, []);
  return (
    <div className="container" style={{ marginTop: 100 }}>
      <IconButtonLink
        imgSrc={`${prefix}/assets/icon/tppri.png`}
        alt={`Pelayanan TPPRI`}
        label={`Pelayanan TPPRI`}
        url={url?.tppri}
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

export default TppriPage;
