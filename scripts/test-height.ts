import puppeteer from "puppeteer-core";

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function main() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000", { waitUntil: "domcontentloaded" });
  await new Promise((r) => setTimeout(r, 1000));

  const title = await page.title();
  const content = await page.content();
  console.log("PAGE TITLE:", title);
  console.log("PAGE CONTENT (first 500 chars):", content.slice(0, 500));

  // Let's also check if any element has overflow: hidden or fixed height
  const overflowElements = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll("*"));
    return all
      .filter((el) => {
        const style = window.getComputedStyle(el);
        return (
          style.overflow === "hidden" ||
          style.overflowY === "hidden" ||
          style.overflow === "clip" ||
          style.overflowY === "clip"
        );
      })
      .map((el) => ({
        tag: el.tagName,
        id: el.id,
        className: el.className,
        height: el.clientHeight,
      }))
      .slice(0, 10);
  });
  console.log("OVERFLOW HIDDEN ELEMENTS:", JSON.stringify(overflowElements, null, 2));

  await browser.close();
}

main().catch(console.error);
