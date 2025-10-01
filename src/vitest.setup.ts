import { expect, beforeAll, afterEach, afterAll } from "vitest";
import matchers from "@testing-library/jest-dom/matchers";
import { server } from "./mocks/node";

// ربط matchers بتاعت jest-dom مع expect بتاع vitest
expect.extend(matchers);

// تشغيل سيرفر الـ MSW
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
