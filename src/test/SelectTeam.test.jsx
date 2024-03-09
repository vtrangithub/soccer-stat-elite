// src/test/SelectTeam.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SelectTeam from "../components/SelectTeam";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        response: [
          { team: { id: 33, name: "Manchester United" } },
          { team: { id: 40, name: "Liverpool" } },
        ],
      }),
  })
);

describe("SelectTeam", () => {
  it("renders and allows team selection", async () => {
    render(
      <BrowserRouter>
        <SelectTeam season="2021" leagueId="39" />
      </BrowserRouter>
    );

    const teamSelect = await screen.findByLabelText(/select a team/i);
    fireEvent.mouseDown(teamSelect);

    const teamOption = await screen.findByRole("option", {
      name: "Manchester United",
    });
    fireEvent.click(teamOption);
  });
});
