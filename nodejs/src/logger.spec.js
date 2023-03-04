"use strict";

import { test } from "tap";
import { log } from "./logger.js";

test("logger module", ({ end, equal, ok }) => {
  ok(log);
  equal("debug", log.level);

  end();
});
