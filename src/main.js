import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/work";
import "./scripts/parallax";
import "./scripts/reviews";
import "./scripts/scroll-to";
import "./scripts/mob-menu";
import "./scripts/forms";
