// Simple script to extract and count emails from unique-participant-emails-2025-07-24.json

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  // Read and parse the JSON file
  const filePath = path.join(
    __dirname,
    "..",
    "unique-participant-emails-2025-07-24.json"
  );
  const rawData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(rawData);

  // Extract only the email addresses
  const emailAddresses = data.emails.map((participant) => participant.email);

  // Print results
  console.log("=".repeat(50));
  console.log("EMAIL EXTRACTION RESULTS");
  console.log("=".repeat(50));

  console.log("\nExtracted Email Addresses:");
  emailAddresses.forEach((email, index) => {
    console.log(`${index + 1}. ${email}`);
  });

  console.log("\n" + "=".repeat(50));
  console.log(`TOTAL COUNT: ${emailAddresses.length} unique emails`);
  console.log("=".repeat(50));
} catch (error) {
  console.error("❌ Error:", error.message);
}
