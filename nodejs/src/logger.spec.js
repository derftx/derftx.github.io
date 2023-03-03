"use strict";

import { test } from "tap";
import { logger } from "./logger.js";

test("logger module", ({ end, equal, ok }) => {
  ok(logger);
  equal("debug", logger.level);

  end();
});
