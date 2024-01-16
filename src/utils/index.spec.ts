import moment from "moment";
import { describe, expect, test } from "vitest";
import { toDisplayDate } from "./";

describe("toDisplayDate", () => {
  test("Correctly converts full date to formtted date.", () => {
    const date = moment("2000-01-01 02:30:30", "yyyy-MM-DD hh:mm:ss");
    const initialDate = date.format("yyyy-MM-DD'T'hh:mm:ss.SSSSSS'Z'");
    const expectedDate = date.format("LLL");
    expect(toDisplayDate(initialDate)).toBe(expectedDate);
  });
});
