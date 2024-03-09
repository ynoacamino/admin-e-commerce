'use client';

import Image from 'next/image';
import { useState, ChangeEvent, useEffect } from 'react';
import { Label } from '../ui/label';
import './ImageForm.css';
import { Spiner } from '../ui/spiner';
import { Check } from '../ui/check';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/dazt6g3o1/image/upload/v1707841235/tnqnayhbiwuxst804bci.webp';

export default function ImageForm(
  { defaultImageUrl = undefined }
  :
  { defaultImageUrl?: string | undefined },
) {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);

  const uploadImage = async () => {
    console.log(image);
    if (!image) return console.error('No image');

    setLoading(true);

    const formData = new FormData();

    formData.append('file', image);
    formData.append('upload_preset', 'e-commerce');

    let responseImage;
    try {
      responseImage = await fetch('https://api.cloudinary.com/v1_1/dazt6g3o1/upload', {
        method: 'POST',
        body: formData,
      }).then((res) => res.json());
    } catch (error) {
      console.error(error);
      return setLoading(false);
    }

    setImageUrl(responseImage.secure_url as string);

    return setLoading(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      const file = files[files.length - 1];
      if (!file) return setImage(null);
      setImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      return null;
    }
    return setImage(null);
  };

  useEffect(() => {
    if (image) uploadImage();
  }, [image]);

  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="product_tags" className="text-right">
        Image
      </Label>
      <div className="col-span-3 flex-col items-center flex gap-3 flex-wrap border-border border-[1px] rounded-lg p-3">
        <Image
          src={String(imagePreview) || defaultImageUrl || DEFAULT_IMAGE}
          alt="img"
          className="w-full aspect-square rounded-lg bg-background"
          width={400}
          height={400}
        />
        <div className="w-full flex justify-between">
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
          <input type="hidden" name="product_image" value={imageUrl || defaultImageUrl || DEFAULT_IMAGE} />
          {
            loading ? (
              <Spiner />
            ) : (
              <Check />
            )
          }
        </div>
      </div>

    </div>
  );
}
