import { google } from "googleapis";
import fs from "fs";
import path from "path";

// Load service account credentials
const KEYFILEPATH = path.join(process.cwd(), "service-account.json"); // your JSON file
const SCOPES = ["https://www.googleapis.com/auth/drive"];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const driveService = google.drive({ version: "v3", auth });

// Upload to Google Drive
export async function uploadToDrive(filePath, fileName, folderId, mimeType) {
  try {
    const fileMeta = {
      name: fileName,
      parents: [folderId],
    };

    const media = {
      mimeType,
      body: fs.createReadStream(filePath),
    };

    const response = await driveService.files.create({
      requestBody: fileMeta,
      media: media,
      fields: "id, webViewLink, webContentLink",
    });

    // Make file public
    await driveService.permissions.create({
      fileId: response.data.id,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    // Direct link
    return `https://drive.google.com/uc?export=view&id=${response.data.id}`;
  } catch (err) {
    console.error("❌ Error uploading to Google Drive:", err);
    throw err;
  }
}
