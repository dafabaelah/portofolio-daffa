import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

const PDFShow = () => {

    const docs = [
        { 
            uri: "https://cdn.jsdelivr.net/gh/dafabaelah/dafabaelah@main/CV%20-%20DAFFA%20AKHDAN%20FADHILLAH.pdf",
            fileType: "pdf",
            fileName: "my-resume.pdf",
        },
    ];
    return(
        <DocViewer 
            documents={docs}
            initialActiveDocument={docs[0]}
            pluginRenderers={DocViewerRenderers}
            prefetchMethod="GET"
            style={{ backgroundColor: "transparent", }}
            theme={{
                primary: "#7754A9",
                secondary: "#ffffff",
                tertiary: "#1F0C3A",
                textPrimary: "#ffffff",
                textSecondary: "#ffffff",
                textTertiary: "#00000099",
                disableThemeScrollbar: false,
                
            }}
        />
    );
};

export default PDFShow;