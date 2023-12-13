// Dentro de UploadImageInput.tsx

import React, { FC, useState } from "react";
import {
  getDownloadURL,
  uploadBytes,
  ref,
  deleteObject,
} from "firebase/storage";
import { storage } from "../utils/firebase-config";

import CameraIcon from "../../../public/static/camera-icon.svg";
import EditIcon from "../../../public/static/edit-image-icon.svg";

import Spinner from "./Spinner";

import "../../styles/components/uploadImageInputStyle.css";

interface UploadImageInputProps {
  onImageChange: (imageUrl: string) => void;
  defaultImage?: string; // Adicionando a nova propriedade
}

const UploadImageInput: React.FC<UploadImageInputProps> = ({
  onImageChange,
  defaultImage,
}) => {
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setLoading(true);
      setSelectedImage("");

      const storageRef = ref(storage, `web/image-${Date.now()}`);

      try {
        await uploadBytes(storageRef, file);
        const url = await getDownloadURL(storageRef);

        if (selectedImage) {
          const deleteRef = ref(storage, selectedImage);
          await deleteObject(deleteRef);
        }

        setSelectedImage(url);
        onImageChange(url);
      } catch (error) {
        alert(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {!loading && !selectedImage && !defaultImage && (
        <div className="form__photo-container">
          <input
            type="file"
            className="photo__label"
            id="photo"
            onChange={uploadImage}
          />
          <label htmlFor="photo">
            <img
              src={CameraIcon.src}
              alt="Photo Icon"
              className="photo__icon"
            />
          </label>
        </div>
      )}

      {!loading && selectedImage && (
        <div className="form__photo-selected-container">
          <img
            src={selectedImage}
            alt="Hospital Photo"
            className="photo__photo"
          />
          <div className="form__photo-edit-container">
            <input
              type="file"
              className="photo__label"
              id="photo"
              onChange={uploadImage}
            />
            <label htmlFor="photo">
              <img src={EditIcon.src} alt="Photo Icon" className="edit-photo" />
            </label>
          </div>
        </div>
      )}

      {loading && !selectedImage && <Spinner />}
      {!loading && !selectedImage && defaultImage && (
        <div className="form__photo-selected-container">
          <img
            src={defaultImage}
            alt="Default Photo"
            className="photo__photo"
          />
          <div className="form__photo-edit-container">
            <input
              type="file"
              className="photo__label"
              id="photo"
              onChange={uploadImage}
            />
            <label htmlFor="photo">
              <img src={EditIcon.src} alt="Photo Icon" className="edit-photo" />
            </label>
          </div>
        </div>
      )}
    </>
  );
};

export default UploadImageInput;
