// components/PDFViewer.tsx
import { Document, Page, pdfjs } from "react-pdf";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

// TODO: Add prop types
// Define props type

export function PDFViewer({ file }: any) {
    return (
        <Document file={file}>
            <Page pageNumber={1} />
        </Document>
    );
}
