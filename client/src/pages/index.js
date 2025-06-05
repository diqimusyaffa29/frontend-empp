import React, { useEffect, useState } from "react";
import HeroSection from "@/components/heroSections";
import IconButtonLink from "@/components/iconButton";
import RowColumnLink from "@/components/rowLink";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import TimeComponent from "@/components/time";

export default function Home() {
  const router = useRouter();
  const [url, setUrl] = useState(null);
  const [roles, setRoles] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    setUrl(JSON.parse(localStorage.getItem("rs") || "null"));
    setRoles(localStorage.getItem("roles") || "null");
    console.log(`pengecekan dilakukan`);
    if (!token) {
      router.push("/login/");
    }
  }, [router]);

  const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";

  const isLimitedRole = ["kabid", "kabag", "kains", "direktur"].includes(roles);

  return (
    <div>
      <HeroSection
        title="Website Supervisi MPP"
        description="Platform digital untuk mendukung proses supervisi Manajemen Pelaksanaan Pasien (MPP) secara efisien dan terstruktur."
      />

      <div className="container pb-5" style={{ marginTop: 90 }}>
        {(roles === "mpp" || isLimitedRole) && (
          <div className="row">
            <div className="col">
              <IconButtonLink
                imgSrc={`${prefix}/assets/icon/hasilSupervisi.png`}
                alt={`Hasil Supervise`}
                label={`Hasil Supervisi`}
                url={url?.hasilSupervisi}
                imgHeight={100}
                imgWidth={100}
                fontWeight={`fs-2`}
              />
            </div>
            <div className="col">
              <IconButtonLink
                imgSrc={`${prefix}/assets/icon/caseManager.png`}
                alt={`Case Manager`}
                label={`Case Manager`}
                url={url?.caseManager}
                imgHeight={100}
                imgWidth={100}
                fontWeight={`fs-2`}
              />
            </div>
            <div className="col">
              <IconButtonLink
                imgSrc={`${prefix}/assets/icon/belumSelesai.png`}
                alt={`Temuan Hasil`}
                label={`Belum Selesai`}
                url={url?.responCatatan}
                imgHeight={100}
                imgWidth={100}
                fontWeight={`fs-2`}
              />
            </div>
          </div>
        )}
        {/* MENU JADWAL PERAWAT START */}
        {(roles === "mpp" || roles === "karu") && (
          <div>
            <hr
              style={{ borderTop: "3px solid #000" }}
              className="mb-xl-3 mb-5"
            />
            <p className="fs-3 text-center">JADWAL</p>
            <div className="row mt-4">
              <div className="col">
                <IconButtonLink
                  url={url?.jadwalUnit}
                  alt={`Jadwal Unit`}
                  label={`Jadwal Unit`}
                  imgSrc={`${prefix}/assets/icon/jadwalUnit.png`}
                  imgHeight={100}
                  imgWidth={100}
                />
              </div>
              <div className="col">
                <IconButtonLink
                  url={url?.jadwalDrDpjp}
                  alt={`Jadwal Dokter DPJP`}
                  label={`Jadwal Dokter DPJP`}
                  imgSrc={`${prefix}/assets/icon/drDpjp.png`}
                  imgHeight={100}
                  imgWidth={100}
                />
              </div>
              <div className="col">
                <IconButtonLink
                  url={url?.jadwalDrJaga}
                  alt={`Jadwal Dokter Jaga`}
                  label={`Jadwal Dokter Jaga`}
                  imgSrc={`${prefix}/assets/icon/drJaga.png`}
                  imgHeight={100}
                  imgWidth={100}
                />
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <IconButtonLink
                    url={url?.jadwalMpp}
                    alt={`Jadwal MPP`}
                    label={`Jadwal MPP`}
                    imgSrc={`${prefix}/assets/icon/mpp.png`}
                    imgHeight={100}
                    imgWidth={100}
                  />
                </div>
                <div className="col ms-xl-5">
                  <RowColumnLink
                    isBorder1={`rounded p-2 shadow mb-5 col-xl-4 ms-xl-5`}
                    imgSrc1={`${prefix}/assets/icon/onCall.png`}
                    witchLink1={`/menus/oncall`}
                    label1={`On Call`}
                  />
                </div>
              </div>
            </div>
            {/* MENU JADWAL PERAWAT END */}
            {/* MENU INPUT SUPERVISI START */}
            {roles === "mpp" && (
              <>
                <hr
                  style={{ borderTop: "3px solid #000" }}
                  className="mb-xl-3 mb-5"
                />
                <RowColumnLink
                  isBorder1={`border`}
                  isBorder2={`border`}
                  imgSrc1={`${prefix}/assets/icon/layananRs.png`}
                  imgSrc2={`${prefix}/assets/icon/sdm.png`}
                  label1={`Supervisi Layanan Rumah Sakit`}
                  label2={`Supervisi Sumber Daya Manusia`}
                  floor={`Menu Supervisi`}
                  witchLink1={`/primaryMenus/slrs`}
                  witchLink2={`/primaryMenus/ssdm`}
                />
                <RowColumnLink
                  isBorder1={`border`}
                  isBorder2={`border`}
                  imgSrc1={`${prefix}/assets/icon/sarpras.png`}
                  imgSrc2={`${prefix}/assets/icon/billing.png`}
                  label1={`Supervisi Sarana Prasarana`}
                  label2={`Supervisi Billing`}
                  witchLink1={`/primaryMenus/ssarpras`}
                  witchLink2={`/primaryMenus/sbilling`}
                />

                <RowColumnLink
                  isBorder1={`border`}
                  isBorder2={`border`}
                  imgSrc1={`${prefix}/assets/icon/kepuasanPelanggan.png`}
                  imgSrc2={`${prefix}/assets/icon/hasilCaseManager.png`}
                  label1={`Kepuasaan Pelanggan`}
                  label2={`Case Manager`}
                  witchLink1={`/primaryMenus/kepuasan`}
                  witchLink2={`/primaryMenus/scm`}
                />

                <div className="row align-items-center justify-content-center">
                  <div className="col-5">
                    <Link
                      href={`/primaryMenus/lainnya`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div className="border pt-2 rounded d-flex flex-column align-items-center justify-content-center">
                        <Image
                          alt="Lantai 1"
                          src={`assets/three-dots.svg`}
                          width={100}
                          height={100}
                        />
                        <p className={"fontWeight"}>Lainnya</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
