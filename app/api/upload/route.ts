import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { checkAuth } from "@/lib/auth";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: Request) {
  try {
          const user=checkAuth(req);
      //     if (!user) {
      //   return NextResponse.json(
      //     { success: false, message: "Unauthorized" },
      //     { status: 401 }
      //   );
      // }
    const body = await req.json();
    const { image } = body; 

    if (!image || typeof image !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Image is required",
        },
        { status: 400 }
      );
    }

    if (!image.startsWith("data:image")) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid image format",
        },
        { status: 400 }
      );
    }

    const upload = await cloudinary.uploader.upload(image, {
      folder: "teesta",
    });

    return NextResponse.json({
      success: true,
      message:"Image uploaded successfully",
      data:{
        url: upload.secure_url,
        public_id: upload.public_id
      }
    });
  } catch (error) {
    console.error("UPLOAD FILE ERROR")
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}