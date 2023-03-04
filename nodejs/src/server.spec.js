"use strict";

import { test } from "tap";
import { server } from "./server.js";

test("server module", ({ doesNotThrow, end }) => {
  const reqMock = {
    method: null,
    url: null,
  };

  const resMock = {
    end: () => {},
    on: () => {},
    setHeader: (key, value) => {},
    write: (data) => {},
  };

  doesNotThrow(() => {
    server(reqMock, resMock);
  });

  end();
});
