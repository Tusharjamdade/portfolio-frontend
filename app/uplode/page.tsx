"use client"
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e:any) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e:any) => {
    e.preventDefault();

    if (!file) {
      setMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('pdf', file);

    try {
      const response = await axios.post('https://portfolio-backend.tusharnjamdade.workers.dev/uploadpdf', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.msg || 'File uploaded successfully');
    } catch (error) {
      setMessage('Error uploading file');
    }
  };

  return (
    <div>
      <h1>Upload PDF</h1>

      <form onSubmit={handleUpload}>
        <input type="file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit">Upload PDF</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
