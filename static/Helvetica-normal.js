﻿import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('Helvetica-normal.ttf', font);
this.addFont('Helvetica-normal.ttf', 'Helvetica', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])