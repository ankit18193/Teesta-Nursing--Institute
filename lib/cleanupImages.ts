import { prisma } from "@/lib/prisma";
import { deleteImage } from "@/lib/cloudinary";

export async function cleanupImages() {
  try {
    const days = 1; 

    const cutoffDate = new Date(
      Date.now() - days * 24 * 60 * 60 * 1000
    );

console.log("Cutoff Date:", cutoffDate);

const oldImages = await prisma.gallery.findMany({
  where: {
    createdAt: {
      lt: cutoffDate,
    },
  },
});

console.log("Found images:", oldImages);

    console.log(`Found ${oldImages.length} old images`);

    for (const item of oldImages) {
      try {
        if (item.imageId) {
          await deleteImage(item.imageId);
        }

        await prisma.gallery.delete({
          where: { id: item.id },
        });

      } catch (err) {
        console.error("Error deleting image:", err);
      }
    }

    console.log("Cleanup done");
  } catch (error) {
    console.error("Cleanup error:", error);
  }
}