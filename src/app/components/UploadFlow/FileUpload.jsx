"use client";
import { useState, useCallback } from "react";
import { getSupabaseClient } from '../../lib/supabaseClient'
import { useDropzone } from "react-dropzone";
import { inter } from "@/app/layout";
import uplaodIcon from '../../../components/assets/file-up.jpg'
import icon from '../../../components/assets/message-circle-warning.png'
import Link from "next/link";
import ParsingAndrocessing from "./ParsingAndrocessing";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [content, setContent] = useState("FileUpload")
  const supabase = getSupabaseClient()

  const allowedExtensions = ["pdf", "dwg", "dxf", "jpg", "jpeg"];

  const onDrop = useCallback((acceptedFiles) => {
    const droppedFile = acceptedFiles[0];
    const ext = droppedFile.name.split(".").pop().toLowerCase();

    if (!allowedExtensions.includes(ext)) {
      alert("Only PDF, DWG, DXF, JPG files allowed!");
      return;
    }

    setFile(droppedFile);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
  });


  const handleUpload = async () => {
    setContent("ParsingAndrocessing")
    if (!file) return alert("Select or drop a file first!");

    const filePath = `uploads/${Date.now()}-${file.name}`;

    const { data, error } = await supabase.storage
      .from("files")
      .upload(filePath, file);

    if (error) {
      console.log(error);
      alert("Upload failed!");
    } else {
      alert("Uploaded successfully!");
    }
  };

  return (
    <div>
      <div>
        <div className={`${inter.className}`}>
          <p className={`${inter.className} text-[#000024] mt-4 font-bold text-[18px]`}>Upload Redline Drawings</p>
          <div
            {...getRootProps()}
            className={`mt-2 border-dashed border-2 w-full lg:w-[960px] h-80 p-10 rounded-xl text-center cursor-pointer transition 
          ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-400"}`}
            onDragEnter={() => setDragActive(true)}
            onDragLeave={() => setDragActive(false)}
          >
            <input {...getInputProps()} />

            {!file ? (
              <div >
                <img src={uplaodIcon.src} className="mx-auto" />
                <p className="font-light text-[15px] mt-8">
                  Drag and drop your drawings here
                </p>
                <p className={`${inter.className} font-thin text-[14px]`}> or click to browse</p>
                <input
                  type="file"
                  className="hidden"
                  id="fileInput"
                  onChange={(e) => onDrop(e.target.files)}
                />

                <button
                  type="button"
                  className={`${inter.className} mt-7 bg-[#4D8FF3] w-[127px] h-[37px] text-[#FFF] rounded-xl`}
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  Browse File
                </button>

              </div>
            ) : (
              <p className="font-medium text-green-700">
                Selected File: {file.name}
              </p>
            )}
          </div>
          <div className="flex flex-col justify-center border w-[960px] h-[137px] border-[#ADAAAA] mt-6 rounded-xl px-6">
            <div className={`${inter.className} flex gap-4`}>
              <img src={icon.src} className="w-4 h-4" />
              <div className="m-0">
                <h1 className=" text-[16px]">Supported formats:</h1>
                <p className="text-[14px] font-light">PDF, DWG, DXF, JPG (max 50MB)</p>
                <p className="text-[14px] mt-5">You can upload multiple drawings at once</p>
              </div>
            </div>

          </div>
          <div className={`${inter.className} flex justify-between mt-6`}>
            <div className="flex flex-col">
              <label>Project Name</label>
              <input placeholder="MetroLine Extension" className="w-[454px] h-[42px] font-normal border rounded-xl px-4 border-[#ADAAAA] text-[14px]" />
            </div>
            <div className="flex flex-col">
              <label>Project Type</label>
              <input placeholder="Architectural" className="w-[454px] h-[42px] font-normal border border-[#ADAAAA] px-4 rounded-xl text-[14px]" />
            </div>
          </div>
          <div className={`${inter.className} flex justify-between mt-9`}>
            <button className="w-40 h-10 font-medium border border-[#ADAAAA] px-4 rounded-xl text-[14px]">Cancel</button>
            <Link href="/components/UploadFlow/ParsingAndrocessing">
              <button onClick={() => handleUpload} className="w-[196px] h-10 font-medium border border-[#ADAAAA] bg-[#D1D5DB] px-4 rounded-xl text-[#FFF] text-[14px]">Continue to Parsing</button>
            </Link>
          </div>

          {/* <button
            onClick={handleUpload}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
          >

          </button> */}
        </div>
        {/* // : <ParsingAndrocessing />} */}
      </div>
    </div>
  );
}
