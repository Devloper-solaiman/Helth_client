const useImgUpload = () => {
  const uploadImage = async (imageData: (string | Blob)[]) => {
    const formData = new FormData();
    formData.append("image", imageData[0]);

    const response = await fetch(
      "https://api.imgbb.com/1/upload?key=543a784f2dd5e9963af2d7d880ec50e6",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    return data;
  };

  return { uploadImage };
};

export default useImgUpload;
