import axios from "axios";

const uploadPhotos = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "meal");

  try {
    const res = await axios.post(import.meta.env.VITE_UPLOAD_LINK, data);

    const { url } = res.data;
    return url;
  } catch (error) {
    console.log(error);
  }
};

export default uploadPhotos;
