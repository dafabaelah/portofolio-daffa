import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const PdfShow = () => {

    const docs = [
        { 
            uri: "https://cdn.jsdelivr.net/gh/dafabaelah/dafabaelah@main/CV%20-%20DAFFA%20AKHDAN%20FADHILLAH.pdf",
            fileType: "pdf",
            fileName: "cv.pdf",
        },
    ];
    return(
        <DocViewer 
            documents={docs}
            initialActiveDocument={docs[0]}
            pluginRenderers={DocViewerRenderers}
            prefetchMethod="GET"
        />
    );
};

export default PdfShow;