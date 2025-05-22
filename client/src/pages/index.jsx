import React, { useEffect, useState } from "react";
import HeroSection from "@/components/heroSections";
import IconButtonLink from "@/components/iconButton";
import RowColumnLink from "@/components/rowLink";
import { useRouter } from "next/navigation";

// const assetPath = process.env.NEXT_PUBLIC_ASSET_PATH || "";
const assetPath = "/dist";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    console.log(`pengecekan dilakukan`);
    if (!token) {
      router.push("/login/");
    }
  }, []);
  return (
    <div>
      <HeroSection
        title={`M.O.D Supervision Website`}
        description={`Website for M.O.D to Supervise`}
      />
      <div className="container pb-5" style={{ marginTop: 90 }}>
        <IconButtonLink
          imgSrc={`${assetPath}/assets/laporanmod.png`}
          alt={`Laporan Kerja MOD`}
          label={`Laporan Kerja MOD`}
          url={`https://docs.google.com/spreadsheets/d/16uPsapAudZAbQa2qVKdNl-Qz8dZGD3en7Va0Vwz75FU/edit?gid=1335487255#gid=1335487255`}
          imgHeight={100}
          imgWidth={100}
          fontWeight={`fs-2`}
        />
        <hr style={{ borderTop: "3px solid #000" }} className="mb-5" />
        <RowColumnLink
          imgSrc1={`${assetPath}/assets/lantai1.webp`}
          imgSrc2={`${assetPath}/assets/lantai2.webp`}
          label1={`Lantai 1`}
          label2={`Lantai 2`}
          floor={`MENU`}
          witchLink1={`/menus/lantai_1`}
          witchLink2={`/menus/lantai_2`}
        />
        <RowColumnLink
          imgSrc1={`${assetPath}/assets/lantai3.webp`}
          imgSrc2={`${assetPath}/assets/lantai4.webp`}
          label1={`Lantai 3`}
          label2={`Lantai 4`}
          witchLink1={`/menus/lantai_3`}
          witchLink2={`/menus/lantai_4`}
        />
        <RowColumnLink
          imgSrc1={`${assetPath}/assets/lantai5.webp`}
          imgSrc2={`${assetPath}/assets/dokter.png`}
          label1={`Lantai 5`}
          label2={`Jadwal Dokter`}
          witchLink1={`/menus/lantai_5`}
          witchLink2={`/menus/jadwal_dokter`}
        />
        <RowColumnLink
          imgSrc1={`${assetPath}/assets/mod.webp`}
          imgSrc2={`${assetPath}/assets/perawat.png`}
          label1={`Jadwal MOD`}
          label2={`Bank Perawat`}
          witchLink1={`/menus/jadwal_mod`}
          witchLink2={`/menus/bank_perawat`}
        />
        <hr style={{ borderTop: "3px solid #000" }} className="mb-5" />
        <p className="display-3 text-center fw-semibold pb-5">INPUT DATA MOD</p>
        <RowColumnLink
          imgSrc1={`${assetPath}/assets/igd.png`}
          imgSrc2={`${assetPath}/assets/irj.png`}
          label1={`Instalasi Gawat Darurat`}
          label2={`Instalasi Rawat Jalan`}
          witchLink1={`/menus/igd`}
          witchLink2={`/menus/irj`}
        />
        <RowColumnLink
          imgSrc1={`${assetPath}/assets/eyecenter.png`}
          imgSrc2={`${assetPath}/assets/urology.png`}
          label1={`Eye Center`}
          label2={`Urology Center`}
          witchLink1={`/menus/eye_center`}
          witchLink2={`/menus/urology_center`}
        />
        <RowColumnLink
          imgSrc1={`${assetPath}/assets/tppri.webp`}
          imgSrc2={`${assetPath}/assets/ibs.png`}
          label1={`TPPRI`}
          label2={`IBS`}
          witchLink1={`/menus/tppri`}
          witchLink2={`/menus/ibs`}
        />
        <RowColumnLink
          imgSrc1={`${assetPath}/assets/hd.jpeg`}
          imgSrc2={`${assetPath}/assets/rwi.jpg`}
          label1={`Hemodialisa`}
          label2={`Rawat Inap`}
          witchLink1={`/menus/hd`}
          witchLink2={`/menus/rwi`}
        />
        <RowColumnLink
          imgSrc1={`${assetPath}/assets/psrs.png`}
          imgSrc2={`${assetPath}/assets/keluhan.webp`}
          label1={`SARPRAS`}
          label2={`Keluhan`}
          witchLink1={`/menus/sarana`}
          witchLink2={`/menus/keluhan`}
        />
        <RowColumnLink
          imgSrc1={`${assetPath}/assets/keuangan.jpg`}
          imgSrc2={`${assetPath}/assets/sdm.jpg`}
          label1={`Keuangan`}
          label2={`SDM`}
          witchLink1={`/menus/keuangan`}
          witchLink2={`/menus/sdm`}
        />
        <IconButtonLink
          marginTop={20}
          marginBottom={0}
          imgSrc={`${assetPath}/assets/catatn.jpg`}
          alt={`Catatan`}
          label={`Catatan`}
          url={`https://docs.google.com/forms/d/e/1FAIpQLSfr_ILw7LlbcApfSdXFIqWQZWAf0bZvB1zZkcAc-SZ62EtYkw/viewform`}
          imgHeight={100}
          imgWidth={100}
          fontWeight={`fs-xl-4`}
        />
      </div>
    </div>
  );
}
