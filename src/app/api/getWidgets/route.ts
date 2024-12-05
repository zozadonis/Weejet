import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
  const widgetsDirectory = path.join(process.cwd(), "src", "data");
  const files = fs.readdirSync(widgetsDirectory);

  const widgets = files.map((file) => {
    const filePath = path.join(widgetsDirectory, file);
    const content = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return content;
  });

  return NextResponse.json(widgets);
}
