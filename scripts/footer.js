"use strict";

/* Script del footer separado (sin JS inline, cumple audit tool) */

const yearSpan = document.querySelector("#year");
const modSpan = document.querySelector("#lastModified");

if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
if (modSpan) modSpan.textContent = document.lastModified;
