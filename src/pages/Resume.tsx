import { PDFViewer } from "../components/PDFViewer";
import pdf from "../assets/david-cai-resume.pdf";

export function Resume() {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-8xl sm:text-9xl font-bold nanum-text">
                Resume
            </h1>
            <PDFViewer file={pdf} />
        </div>
    );
}
