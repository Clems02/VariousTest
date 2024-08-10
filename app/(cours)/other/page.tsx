"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Slider } from "@/src/components/ui/slider";
import NextImage from "next/image";
import { ChangeEventHandler, useState } from "react";

type image = {
  width: number;
  height: number;
  src: string;
  name: string;
};

export default function OtherAppPage() {
  const [image, setImage] = useState<image | null>(null);
  const [settings, setSettings] = useState({
    padding: 40,
    shadow: 10,
    radius: 80,
  });

  const handleImageLoad: ChangeEventHandler<HTMLInputElement> = (e) => {
    const files = e.target.files;
    if (!files) return;
    const file = files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        setImage({
          width: img.width,
          height: img.height,
          src: img.src,
          name: file.name,
        });
      };

      img.src = reader.result as string;
    };

    reader.readAsDataURL(files[0]);
  };

  const handleChange = (type: string, value: number) => {
    setSettings((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <div className="flex bg-cyan-200 min-h-full justify-center m-auto p-10 items-center gap-5">
      <Card className="bg-gray-200">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 text-md">
            <Label>Fichier</Label>
            <Input type="file" onChange={handleImageLoad} />
          </div>
          <SliderItem
            label="Padding"
            type="padding"
            value={settings.padding}
            onChange={handleChange}
          />
          <SliderItem
            label="Shadow"
            type="shadow"
            value={settings.shadow}
            onChange={handleChange}
          />
          <SliderItem
            label="Radius"
            type="radius"
            value={settings.radius}
            onChange={handleChange}
          />
        </CardContent>
      </Card>
      <div className="relative max-w-md h-64 overflow-hidden">
        {image && (
          <NextImage
            alt="Img"
            width={image.width}
            height={image.height}
            src={image.src}
            className="inset-0 w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

type SliderProps = {
  type: string;
  label: string;
  value: number;
  maxValue?: number;
  onChange: (type: string, value: number) => void;
};

const SliderItem = ({
  type,
  label,
  value = 0,
  maxValue = 99,
  onChange,
}: SliderProps) => {
  return (
    <div className="flex flex-col gap-3 text-md">
      <Label>{label}</Label>
      <Slider
        value={[value]}
        min={0}
        max={maxValue}
        step={1}
        onValueChange={(value) => onChange(type, value[0])}
      />
    </div>
  );
};
