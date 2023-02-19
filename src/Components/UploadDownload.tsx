import { Button, Typography } from "@mui/material"
import axios from "axios";
import React, { useState } from "react";

const UploadDownload = () => {

    let formData = new FormData();
    const [file, setFile] = useState<any>({}); 

    const handleOnSubmit = () => {
        console.log("formData", formData);
        axios.post("https://v2.convertapi.com/upload", { formData })
            .then(res => {
                console.log("res", res);
                setFile(res);
            })
            .catch(err => {
                console.log("error");
            })
    }
    const handleOnDownload = (e: any) => {
        console.log("open", file)
        window.open(`http://localhost:8081/api/download/${file.name}`);
    }

    const onFileUpload = (e: any) => {
        const formData = new FormData();
        formData.append("myFile",e.target.files[0]);
        setFile(e.target.files[0]);
       
        axios.post("http://localhost:8081/api/uploadfile", formData, {
          headers: {
            "content-type": "multipart/form-data",

          },
        });
      };

    return (
        <>
            <div style={{ paddingTop: "10px", textAlign:"center" }}>
                <Button
                    variant="contained"
                    component="label"
                    style={{ marginRight: "16px" }}
                >
                    Choose File
                    <input
                        type="file"
                        hidden
                        onChange={onFileUpload}
                    />
                </Button>
                {/* <Button variant="contained" style={{ marginRight: "3px" }} onClick={handleOnSubmit}>Upload</Button> */}
                <Button variant="contained" onClick={handleOnDownload}>Download</Button>
            </div>
        </>
    )
}

export default UploadDownload;