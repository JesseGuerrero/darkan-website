import React from 'react';
import '../stylesheets/download/Download.scss';

export default function DownloadPage() {
    return (
        <div className="download-main-container">
            <div className="download-sub-container">
                <div className="download-header">
                    <h1>Download & Play</h1>
                </div>
                <div className="button-container">
                    <div>
                        <button className="download-client1 button-hover"><a href="https://github.com/JesseGuerrero/web-files-darkan/blob/master/DarkanSetup.msi?raw=true" download><h2>Windows Installer</h2></a></button>
                    </div>
                    <div>
                        <button className="download-client2 button-hover"><a href="https://github.com/JesseGuerrero/web-files-darkan/blob/master/Darkan.jar?raw=true" download><h2>Java 17 Jar</h2></a></button>
                    </div>
                </div>
            </div>
        </div>
        )
}
