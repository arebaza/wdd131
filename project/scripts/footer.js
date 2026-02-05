"use strict";

// Update footer year and last modified using external JS only
const yearSpan = document.querySelector("#year");
const modSpan = document.querySelector("#lastModified");

if (yearSpan) yearSpan.textContent = `${new Date().getFullYear()}`;
if (modSpan) modSpan.textContent = `${document.lastModified}`;
