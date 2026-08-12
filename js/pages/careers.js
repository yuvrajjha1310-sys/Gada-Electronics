/* ==========================================================================
   careers.js — Page bootstrap for careers.html.
   Delegates to modules/job-list.js for the open-positions listing +
   filters; nothing else on this page needs page-specific JS beyond that.
   ========================================================================== */
import { qs } from "../core/dom-utils.js";
import * as jobList from "../modules/job-list.js";

export function init() {
  if (!qs("[data-js='careers-page']")) return;
  jobList.init();
}

export default { init };