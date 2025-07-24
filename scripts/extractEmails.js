// Script to extract emails array from unique-participant-emails-2025-07-24.json
// and print the count

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get current directory for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the JSON file
const filePath = path.join(
  __dirname,
  "..",
  "unique-participant-emails-2025-07-24.json"
);

try {
  // Read and parse the JSON file
  const rawData = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(rawData);

  // Extract only the email addresses from the emails array
  const emailAddresses = data.emails.map((participant) => participant.email);

  // Print the emails array
  console.log("Email Addresses:");
  console.log(emailAddresses);

  // Print the count
  console.log(`\nTotal number of unique emails: ${emailAddresses.length}`);

  // Optional: Export the emails array to a separate file
  const outputData = {
    emails: emailAddresses,
    count: emailAddresses.length,
    extractedDate: new Date().toISOString(),
  };

  const outputPath = path.join(__dirname, "extracted-emails.json");
  fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
  console.log(`\nEmails array has been saved to: ${outputPath}`);
} catch (error) {
  console.error("Error reading or processing the file:", error.message);
}
