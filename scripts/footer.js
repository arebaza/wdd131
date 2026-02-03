"use strict";

/* Script del footer separado */

const yearSpan = document.querySelector("#year");
const modSpan = document.querySelector("#lastModified");

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (modSpan) modSpan.textContent = document.lastModified;
