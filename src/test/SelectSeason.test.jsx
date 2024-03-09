// src/test/SelectSeason.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SelectSeason from "../components/SelectSeason";
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ response: [2020, 2021, 2022] }),
  })
);

describe("SelectSeason", () => {
  it("renders correctly and allows season selection", async () => {
    const onSeasonSelect = jest.fn();
    render(<SelectSeason onSeasonSelect={onSeasonSelect} />);

    const seasonSelect = await screen.findByLabelText(/season/i);
    fireEvent.mouseDown(seasonSelect);

    const seasonOption = await screen.findByRole("option", { name: "2020" });
    fireEvent.click(seasonOption);

    expect(onSeasonSelect).toHaveBeenCalledWith(2020);
  });
});
