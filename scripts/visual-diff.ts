import puppeteer, { Page } from "puppeteer-core";
import fs from "fs";
import path from "path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const URL = "http://localhost:3000";
const REPORTS_DIR = path.join(process.cwd(), "reports");
const REFERENCE_PATH = path.join(process.cwd(), "reference", "design.png");

async function autoScroll(page: Page) {
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });
  // Wait a short moment for any pending decode/renders
  await new Promise((r) => setTimeout(r, 600));
}

async function main() {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }

  console.log("Launching headless Chrome from:", CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();

  const breakpoints = [
    { width: 1440, height: 900, name: "desktop-1440" },
    { width: 1280, height: 800, name: "desktop-1280" },
    { width: 1024, height: 768, name: "tablet-1024" },
    { width: 768, height: 1024, name: "tablet-768" },
    { width: 390, height: 844, name: "mobile-390" },
    { width: 360, height: 800, name: "mobile-360" },
  ];

  for (const bp of breakpoints) {
    console.log(`Capturing viewport: ${bp.name} (${bp.width}x${bp.height})`);
    await page.setViewport({
      width: bp.width,
      height: bp.height,
      deviceScaleFactor: 1,
    });

    await page.goto(URL, { waitUntil: "networkidle0" });
    await page.evaluateHandle("document.fonts.ready");

    // Scroll to trigger all lazy-loaded images
    await autoScroll(page);

    const screenshotPath = path.join(REPORTS_DIR, `${bp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot to ${screenshotPath}`);
  }

  await browser.close();
  console.log("Screenshots captured successfully!");
}

main().catch((err) => {
  console.error("Error running visual-diff script:", err);
  process.exit(1);
});
