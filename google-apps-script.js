// ==========================================================
// Tech Groww - Google Apps Script for Lead Form Integration
// ==========================================================
//
// SETUP INSTRUCTIONS:
// 1. Go to https://script.google.com/
// 2. Create a New Project
// 3. Paste this entire script
// 4. Set up your Google Sheet:
//    - Create a new Google Sheet
//    - Name the first sheet "Leads"
//    - Add headers: Timestamp | Name | Email | Phone | Service | Message
// 5. Replace SHEET_ID below with your Google Sheet ID
//    (found in the URL: docs.google.com/spreadsheets/d/SHEET_ID/edit)
// 6. Deploy > New Deployment > Web App
//    - Execute as: Me
//    - Who has access: Anyone
// 7. Copy the Web App URL
// 8. In ContactForm.tsx, replace YOUR_GOOGLE_APPS_SCRIPT_URL_HERE with the copied URL
//
// ==========================================================

const SHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE";
const SHEET_NAME = "Leads";

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);

    // Auto-create headers if this is the first row
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Phone",
        "Service",
        "Message",
        "Source",
      ]);
      sheet.getRange(1, 1, 1, 7).setFontWeight("bold");
    }

    // Extract parameters
    const params = e.parameter;
    const timestamp = params.timestamp || new Date().toISOString();
    const name = params.name || "";
    const email = params.email || "";
    const phone = params.phone || "";
    const service = params.service || "";
    const message = params.message || "";

    // Append the lead to the sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      phone,
      service,
      message,
      "Website Form",
    ]);

    // Optional: Send notification email
    sendNotificationEmail(name, email, phone, service, message);

    return ContentService.createTextOutput(
      JSON.stringify({
        status: "success",
        message: "Lead captured successfully",
      })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Error:", error);
    return ContentService.createTextOutput(
      JSON.stringify({
        status: "error",
        message: error.toString(),
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  return doGet(e);
}

function sendNotificationEmail(name, email, phone, service, message) {
  // Optional: uncomment and set your notification email
  // const NOTIFICATION_EMAIL = "your-email@gmail.com";
  // 
  // MailApp.sendEmail({
  //   to: NOTIFICATION_EMAIL,
  //   subject: `🚀 New Lead: ${name} - ${service}`,
  //   htmlBody: `
  //     <h2>New Lead from Tech Groww Website</h2>
  //     <table style="border-collapse: collapse; width: 100%;">
  //       <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Name</b></td><td style="padding: 8px; border: 1px solid #ddd;">${name}</td></tr>
  //       <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Email</b></td><td style="padding: 8px; border: 1px solid #ddd;">${email}</td></tr>
  //       <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Phone</b></td><td style="padding: 8px; border: 1px solid #ddd;">${phone}</td></tr>
  //       <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Service</b></td><td style="padding: 8px; border: 1px solid #ddd;">${service}</td></tr>
  //       <tr><td style="padding: 8px; border: 1px solid #ddd;"><b>Message</b></td><td style="padding: 8px; border: 1px solid #ddd;">${message}</td></tr>
  //     </table>
  //   `,
  // });
}
