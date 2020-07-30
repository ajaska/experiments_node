import puppeteer from "puppeteer";

const screenshot = async (url: string) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.setViewport({ width: 1200, height: 800 });

    const filename = url.replace(/[^a-z0-9]/gi, "_").toLowerCase() + ".png";
    await page.screenshot({ path: filename });
  } catch (e) {
    console.error(e);
  } finally {
    await browser.close();
  }
};

const args = process.argv.slice(2);
if (args.length < 1) {
  throw new Error("specify url");
}

screenshot(args[0]);
