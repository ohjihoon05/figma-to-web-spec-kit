// web3-studio.html 의 스크립트 동작을 실제 브라우저(Chromium)로 확인하는 시험.
// 바깥 주소(Tailwind CDN, 이미지 서버)로 가는 요청은 모두 막고 페이지 파일만 연다.
// 실행: node --test tests/*.test.cjs
// Playwright 가 없으면 건너뛴다(이 저장소는 의존성을 따로 두지 않음).
const { test, before, after } = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { pathToFileURL } = require('node:url')

let playwright = null
try {
  playwright = require('playwright')
} catch {
  playwright = null
}

const PAGE = pathToFileURL(path.join(__dirname, '..', 'web3-studio.html')).href
const skip = playwright ? false : 'playwright 가 설치돼 있지 않음'

let browser
let page
let errors

before(async () => {
  if (skip) return
  browser = await playwright.chromium.launch()
})

after(async () => {
  if (browser) await browser.close()
})

async function open() {
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
  await context.route('**/*', (route) => (route.request().url().startsWith('file:') ? route.continue() : route.abort()))
  page = await context.newPage()
  errors = []
  page.on('pageerror', (e) => errors.push(e.message))
  await page.goto(PAGE, { waitUntil: 'load' })
  return page
}

test('바깥 자원 없이 열어도 스크립트 오류가 없다', { skip }, async () => {
  await open()
  assert.equal(await page.locator('.carousel-item').count(), 3)
  assert.deepEqual(errors, [])
})

test('도움 탭을 누르면 그 탭만 active 가 된다', { skip }, async () => {
  await open()
  const tabs = page.locator('.help-tab')
  assert.equal(await tabs.count(), 3)
  await tabs.nth(1).scrollIntoViewIfNeeded()
  await tabs.nth(1).click()
  const active = await tabs.evaluateAll((els) => els.map((e) => e.classList.contains('active')))
  assert.deepEqual(active, [false, true, false])
  await tabs.nth(2).click()
  assert.deepEqual(await tabs.evaluateAll((els) => els.map((e) => e.classList.contains('active'))), [false, false, true])
  assert.deepEqual(errors, [])
})

test('화면에 들어온 fade-in 구역에 visible 이 붙는다', { skip }, async () => {
  await open()
  const about = page.locator('#about')
  await about.scrollIntoViewIfNeeded()
  await page.waitForFunction(() => document.querySelector('#about').classList.contains('visible'))
  assert.deepEqual(errors, [])
})

test('메뉴의 #about 링크를 누르면 그 구역으로 내려간다', { skip }, async () => {
  await open()
  assert.equal(await page.evaluate(() => window.scrollY), 0)
  await page.locator('nav a[href="#about"]').click()
  await page.waitForFunction(() => window.scrollY > 0)
  assert.deepEqual(errors, [])
})

test('캐러셀 이전 버튼은 첫 칸에서 더 가지 않는다', { skip }, async () => {
  await open()
  const prev = page.locator('.carousel-controls img').first()
  await prev.scrollIntoViewIfNeeded()
  await prev.click()
  const transform = await page.locator('.carousel-track').evaluate((el) => el.style.transform)
  assert.match(transform, /^translateX\(-?0px\)$/)
  assert.deepEqual(errors, [])
})
