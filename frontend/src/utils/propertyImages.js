const uploadedHouseImages = [
  '/house-listings/3-1.jpg',
  '/house-listings/360_F_343802551_b8OiOq8kcIr4FNE6UBlPSc82Ik9n5TUX.jpg',
  '/house-listings/Futuristic-Homes-on-Another-Planet-AI-Artwork-3_1-1024x574.jpg',
  '/house-listings/Futuristic-Homes-on-Another-Planet-AI-Artwork-9.jpg',
  '/house-listings/Futuristic-Homes-on-Another-Planet-AI-Artwork-e1717719795983.jpg',
  '/house-listings/capsule-house-concept-3.jpg',
  '/house-listings/dark-moody-saloon-bar-on-600nw-2414576593.jpg',
  '/house-listings/download.jpg',
  '/house-listings/images.jpg',
  '/house-listings/martian-houses-setareh-ilka-1.jpg',
  '/house-listings/martian-houses-setareh-ilka.jpeg',
  '/house-listings/martian-houses-setareh-ilka.jpg',
];

export const isValidImageUrl = (url) => {
  if (!url || typeof url !== 'string') return false;
  return /^(https?:\/\/|\/|data:image\/)/i.test(url);
};

const hashString = (value) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
};

export const getUploadedHouseImage = (property, offset = 0) => {
  const identity = String(
    property?._id ||
      property?.id ||
      property?.title ||
      property?.name ||
      'listing'
  );
  const seed = hashString(identity);
  return uploadedHouseImages[(seed + offset) % uploadedHouseImages.length];
};

export const getPropertyImage = (property, offset = 0) => {
  if (!property) return uploadedHouseImages[0];
  const source = property.mainImage || property.image || '';
  if (isValidImageUrl(source)) return source;
  return getUploadedHouseImage(property, offset);
};
