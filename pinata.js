const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjMDViNTdmNi1hY2VhLTQ3NmItYmVkNi01ZDNhOTJjNjI3NWYiLCJlbWFpbCI6ImFiZHVsZS5rYXNoZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImU1OTc3N2RiYTU2OTk0M2JmYzdiIiwic2NvcGVkS2V5U2VjcmV0IjoiZWNjYmVhOTliMTk2MTZjYjg0YmFhZjVlNWE4NDQ5NmNhMTk5ZjU0MjU3MjJiMTVkNDc2ZmMyMGZiY2I2NDVhYiIsImlhdCI6MTcwNzY2MDExMH0.ntQrhEJG-ynxH1wgHBDb2AOtYPjZpDrdsO7pcc15Jpk'

const pinFileToIPFS = async () => {
    const formData = new FormData();
    const src = "C:/Users/white/OneDrive/Bureau/Decentralization Technologies/TD2/chaton.jpeg";

    const file = fs.createReadStream(src)
    formData.append('file', file)

    const pinataMetadata = JSON.stringify({
        name: 'File name',
    });
    formData.append('pinataMetadata', pinataMetadata);

    const pinataOptions = JSON.stringify({
        cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            maxBodyLength: "Infinity",
            headers: {
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
                'Authorization': `Bearer ${JWT}`
            }
        });
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
}
pinFileToIPFS()
