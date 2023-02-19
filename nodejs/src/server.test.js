"use strict";

import { test } from "tap";
import { server } from "./server.js";

test("server module", ({ doesNotThrow, end, throws }) => {
  const responseMock = {
    end: () => {},
    setHeader: (key, value) => {},
    write: (data) => {},
  };

  doesNotThrow(() => {
    server(null, responseMock);
  });

  throws(() => {
    server();
  });

  end();
});
