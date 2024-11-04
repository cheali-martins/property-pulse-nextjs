"use client";
import { useState } from "react";

function AddImageProperty() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map((file) => ({
      file,
      name: file.name,
      previewUrl: URL.createObjectURL(file),
    }));

    if (selectedFiles.length + newFiles.length > 4) {
      alert("You can only select up to 4 images.");
      return;
    }

    setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleRemoveImage = (indexToRemove) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = prevFiles.filter(
        (_, index) => index !== indexToRemove
      );

      // Revoke the Object URL to free memory
      URL.revokeObjectURL(prevFiles[indexToRemove].previewUrl);

      return updatedFiles;
    });
  };

  return (
    <div className="mb-4">
      <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
        Images (Select up to 4 images)
      </label>
      <input
        type="file"
        id="images"
        name="images"
        className="border rounded w-full py-2 px-3"
        accept="image/*"
        multiple
        onChange={handleFileChange}
        required
      />
      <p className="text-gray-500 mt-2">
        {selectedFiles.length} / 4 images selected
      </p>

      {/* Image Preview Section */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
        {selectedFiles.map(({ previewUrl, name }, index) => (
          <div key={index} className="relative">
            <img
              src={previewUrl}
              alt={`Selected preview ${index + 1}`}
              className="w-full h-32 object-cover rounded"
            />
            <p className="text-xs text-gray-600 mt-1">{name}</p>
            <button
              type="button"
              className="absolute top-1 right-1 bg-red-500 text-white text-xs p-1 rounded-md"
              onClick={() => handleRemoveImage(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddImageProperty;
