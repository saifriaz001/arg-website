import React from 'react';
import {getImageKitAuth} from "../Endpoints/AutheticatorAPI"
import { IKContext, IKUpload } from 'imagekitio-react';

const ImageKitUploader = ({ onUpload, label , disabled }) => {
  const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;
  const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT; 
  return (
    <div className="space-y-2">
      {label && <label className="block font-medium">{label}</label>}

      <IKContext
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={getImageKitAuth} // Use your authentication endpoint
      >
        <IKUpload
          disabled={disabled} 
          fileName="service_image.jpg"
          useUniqueFileName={true}
          onSuccess={(res) => {
            console.log('✅ Image Uploaded:', res);
            if (onUpload) onUpload(res.url); // send image URL back to parent form
          }}
          onError={(err) => {
            console.error('❌ Upload Error:', err);
            alert('Image upload failed');
          }}
          className="border rounded p-2"
        />
      </IKContext>
    </div>
  );
};

export default ImageKitUploader;
