import RowColumn from '@/components/row';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const p3Page = () => {
    const prefix = process.env.NEXT_PUBLIC_ASSET_PREFIX || "";
    const [url, setUrl] = useState(null);

    useEffect(() => {
        setUrl(JSON.parse(localStorage.getItem("rs") || "null"));
    }, []);
    return (
        <div className='container' style={{ marginTop: 100 }}>
            <RowColumn
                imgH1={100}
                imgH2={100}
                imgW1={100}
                imgW2={100}
                colAlt1={`Input Form P3`}
                colAlt2={`Hasil Form P3`}
                labelCol1={`Input Form P3`}
                labelCol2={`Hasil Form P3`}
                imgCol1={`${prefix}/assets/icon/p3.png`}
                imgCol2={`${prefix}/assets/icon/hasilForm.png`}
                // urlCol1={url?.rajalA} waiting for url in kode.php
                // urlCol2={url?.rajalB} waiting for url in kode.php
            />
            <Link href={`/`} >
                <button className="btn btn-primary" type="submit" style={{ float: 'right' }}>Back to Home</button>
            </Link>
        </div>
    )
}

export default p3Page
