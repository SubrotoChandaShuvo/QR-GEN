const handleGenQRCode=()=>{
    const url = document.getElementById("urlInput").value.trim();
    // console.log(url);
    if(!url){
        return alert("Provide Valid URl")
    }
    document.getElementById("urlInput").value="";
    try{
        new QRCode(document.getElementById("QR-Code"),{
            text:url,
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff"
        })
    }
    catch(err){
        console.log(err);
        
    }
}