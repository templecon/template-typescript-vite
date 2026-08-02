import { describe, expect, it } from "vitest";
import { example } from "@/index";
import { featureExample } from "@/feature";

describe("example test", () => {
    it("should return example", () => {
        expect(example()).toBe("example");
    });

    it("returns the feature entry example", () => {
        expect(featureExample()).toBe("feature");
    });
});
