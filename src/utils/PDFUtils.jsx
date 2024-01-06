import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const exportToPDF = () => {
  const input = document.getElementById("resume");
  const pdf = new jsPDF("p", "mm");
  pdf.setFont("times");
  html2canvas(input, { scale: 3 }).then((canvas) => {
    var imgWidth = 200;
    var imgHeight = (canvas.height * imgWidth) / canvas.width;
    const imgData = canvas.toDataURL("image/png");

    var position = 0;
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  });
};
