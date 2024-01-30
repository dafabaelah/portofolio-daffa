import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const PdfShow = () => {

    const docs = [
        { 
            uri: "https://daffa-af.tech/my-documents/CV-DAFFA_AKHDAN_FADHILLAH-eng.pdf",
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