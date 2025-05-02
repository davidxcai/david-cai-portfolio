// components/PDFViewer.tsx
import { Document, Page, pdfjs } from "react-pdf";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString();

// Define props type
interface PDFViewerProps {
    file: string | File | Uint8Array;
}

export function PDFViewer({ file }: any) {
    return (
        <Document file={file}>
            <Page pageNumber={1} />
        </Document>
    );
}
