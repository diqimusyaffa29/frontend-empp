import IconButtonLink from "@/components/iconButton";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SSdmPage = () => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(JSON.parse(localStorage.getItem("rs") || "null"));
  }, []);
  return (
    <div className="container" style={{ marginTop: 100 }}>
      <IconButtonLink
        imgSrc="/assets/icon/sdm.png"
        alt={`Distribusi Ketenagaan`}
        label={`Distribusi Ketenagaan`}
        url={url?.distTenaga}
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

export default SSdmPage;
