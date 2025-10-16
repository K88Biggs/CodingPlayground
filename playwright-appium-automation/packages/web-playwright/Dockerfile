# Simple container to run Playwright tests
FROM mcr.microsoft.com/playwright:v1.47.0-jammy

WORKDIR /work
COPY package.json package-lock.json* ./
COPY packages/web-playwright/package.json packages/web-playwright/package.json
RUN npm ci

COPY packages/web-playwright ./packages/web-playwright
RUN npx playwright install --with-deps

CMD ["npm", "run", "test:web"]