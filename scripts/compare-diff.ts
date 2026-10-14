import puppeteer from "puppeteer-core";
import fs from "fs";
import path from "path";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const URL = "http://localhost:3000";
const REPORTS_DIR = path.join(process.cwd(), "reports");

async function main() {
  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 15000 });
  await new Promise((r) => setTimeout(r, 1200));
  await page.evaluateHandle("document.fonts.ready");

  // Scroll through to load any lazy images
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 50);
    });
  });
  await new Promise((r) => setTimeout(r, 600));

  const desktop1440Path = path.join(REPORTS_DIR, "desktop-1440.png");
  await page.screenshot({ path: desktop1440Path, fullPage: true });
  console.log("Saved screenshot:", desktop1440Path);

  const rects = await page.evaluate(() => {
    const list = [
      { name: "header", selector: "header" },
      { name: "hero", selector: "section[aria-labelledby='hero-heading']" },
      { name: "menu", selector: "#menu" },
      { name: "chicago", selector: "#about" },
      { name: "ways", selector: "#ways-to-enjoy" },
      { name: "community", selector: "#community" },
      { name: "franchise", selector: "#franchise" },
      { name: "footer", selector: "footer" },
    ];
    return list.map((item) => {
      const el = document.querySelector(item.selector);
      if (!el) return { name: item.name, error: "not found" };
      const r = el.getBoundingClientRect();
      return {
        name: item.name,
        top: Math.round(r.top + window.scrollY),
        height: Math.round(r.height),
        bottom: Math.round(r.bottom + window.scrollY),
      };
    });
  });

  console.log("Section Rectangles:", JSON.stringify(rects, null, 2));

  await browser.close();
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
