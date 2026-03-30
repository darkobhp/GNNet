const SPREADSHEET_ID = "1DAPN2LLAO-WKJPCFaTiw4gtnprj48FPm52YXMNdDmTk";
const SHEET_NAME = "Applications";
const DRIVE_FOLDER_ID = "1BtwbiVF7P4BDeVSYMQIywLI2N5IyCJwK";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submitted At",
        "Full Name",
        "Email",
        "Phone Number",
        "Institution",
        "Current Role",
        "Area of Interest",
        "Why Join",
        "LinkedIn",
        "Preferred Contact",
        "CV File Name",
        "CV Drive URL"
      ]);
    }

    let cvDriveUrl = "";
    let cvFileName = "";

    if (payload.cvFile && payload.cvFile.base64 && DRIVE_FOLDER_ID !== "PASTE_YOUR_DRIVE_FOLDER_ID") {
      const bytes = Utilities.base64Decode(payload.cvFile.base64);
      const blob = Utilities.newBlob(bytes, payload.cvFile.type, payload.cvFile.name);
      const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
      const file = folder.createFile(blob);
      cvDriveUrl = file.getUrl();
      cvFileName = payload.cvFile.name;
    }

    sheet.appendRow([
      payload.submittedAt || "",
      payload.fullName || "",
      payload.email || "",
      payload.phone || "",
      payload.institution || "",
      payload.role || "",
      payload.interest || "",
      payload.interestMessage || "",
      payload.linkedin || "",
      payload.contactMethod || "",
      cvFileName,
      cvDriveUrl
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        ok: false,
        error: String(error)
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
