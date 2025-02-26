import { useState } from "react"






export const Qrcodescanner = () => {
    const[img,setImg]=useState("")
    const[loading,setLoading]=useState(false)
    const[qrdata,setQrData]=useState("https://vetritechnologysolutions.in/")
    const[qrsize,setQrSize]=useState("150")

    async function GenerateQrcode() {
        setLoading(true)
        try {
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`
            setImg(url)
            
        } 
        catch (error) {
            console.log("Error in generate QR code",error);
            
            
        } 
        finally{
            setLoading(false)

        }
        
        
    }
    function DownloadQrcode() {
        fetch(img)
        .then((response)=>response.blob())
        .then((blob)=>{
            const link=document.createElement("a")
        link.href=URL.createObjectURL(blob)
        link.download="qrcode.jpg"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }
        
        )

        
    }
  return (
    <div className='app-container'>
        <h1 className=''>QR CODE GENERATOR</h1>
        {loading && <p>Please wait.....</p>}
       {img && <img src={img} className="img1" alt="" />}
        <div className='input-datas'>
            <label htmlFor="input-data" className="input-label">Data for QRcode</label>
            <input type="text" value={qrdata} id='input-data' onChange={(e)=>setQrData(e.target.value)} placeholder="Enter Data for QR code"/>
            <label htmlFor="input-data1"  className="input-label">Img size(e.g.....150)</label>
            <input type="text" id='input-data1'  value={qrsize} onChange={(e)=>setQrSize(e.target.value)}  placeholder="Enter QR code img size"/>
            <button className='GenerateQRcode' disabled={loading} onClick={GenerateQrcode}>Generate QRcode</button>
        <button className='DownloadQRcode' onClick={DownloadQrcode}>Download QRcode</button>
        </div>
        
        
       

    </div>
        )
        

}
