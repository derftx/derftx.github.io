"use strict";

import { test } from "tap";
import { server } from "./server.js";

test("server module", ({ doesNotThrow, end, throws }) => {
  const response = {
    end: () => {},
    setHeader: (key, value) => {},
    write: (data) => {},
  };

  doesNotThrow(() => {
    server(null, response);
  });

  throws(() => {
    server();
  });

  end();
});
