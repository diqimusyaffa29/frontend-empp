import React, { useEffect, useState } from "react";
import HeroSection from "@/components/heroSections";
import IconButtonLink from "@/components/iconButton";
import RowColumn from "@/components/row";
import { useRouter } from "next/router";

export default function PedomanPage() {
  const router = useRouter();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(JSON.parse(localStorage.getItem("rs") || "null"));
    const token = localStorage.getItem("auth_token");
    console.log(`pengecekan dilakukan`);
    if (!token) {
      router.push("/login/");
    }
  }, [router]);

  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

  return (
    <div>
      <HeroSection title={`Pedoman MPP`} />
      <div className="container pb-5" style={{ marginTop: 90 }}>
        <IconButtonLink
          url={url?.materiPelatihan}
          label={`Materi Pelatihan`}
          fontWeight={`fs-2`}
          alt={`Materi Pelatihan Google Drive`}
          imgSrc={`${prefix}/assets/icon/pelatihan.png`}
          imgHeight={130}
          imgWidth={200}
        />
        <hr style={{ borderTop: "3px solid #000" }} className="mb-5" />
        <RowColumn
          imgH1={200}
          imgH2={200}
          imgW1={300}
          imgW2={300}
          labelCol1={`Pedoman IGD`}
          labelCol2={`Pedoman IRJ`}
          colAlt1={`Pedoman IGD`}
          colAlt2={`Pedoman IRJ`}
          imgCol1={`${prefix}/assets/icon/igd.png`}
          imgCol2={`${prefix}/assets/icon/rajal.png`}
          urlCol1={url?.pedomanIgd}
          urlCol2={url?.pedomanIrj}
        />
        <RowColumn
          imgH1={200}
          imgH2={200}
          imgW1={300}
          imgW2={300}
          labelCol1={`Pedoman IBS`}
          labelCol2={`Pedoman ICU`}
          colAlt1={`Pedoman IBS`}
          colAlt2={`Pedoman ICU`}
          imgCol1={`${prefix}/assets/icon/ibs.png`}
          imgCol2={`${prefix}/assets/icon/icu.png`}
          urlCol1={url?.pedomanIbs}
          urlCol2={url?.pedomanIcu}
        />
        <RowColumn
          imgH1={200}
          imgH2={200}
          imgW1={300}
          imgW2={300}
          labelCol1={`Pedoman Hemodialisa`}
          labelCol2={`Pedoman RWI`}
          colAlt1={`Pedoman Hemodialisa`}
          colAlt2={`Pedoman RWI`}
          imgCol1={`${prefix}/assets/icon/hemo.png`}
          imgCol2={`${prefix}/assets/icon/ranap.png`}
          urlCol1={url?.pedomanHd}
          urlCol2={url?.pedomanRwi}
        />
        <RowColumn imgH1={200} imgW1={300} imgCol1={`${prefix}/assets/icon/sop.png`} labelCol1={`SOP`} colAlt1={`SOP`} urlCol1={url?.pedomanSop}/>
      </div>
    </div>
  );
}
